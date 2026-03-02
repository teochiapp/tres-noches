import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../api/config';

export const useFetchProjects = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/proyectos?populate=*`);
                const projects = response.data.data;

                if (!projects) {
                    setCategories([]);
                    setLoading(false);
                    return;
                }

                // Group by category
                // Strapi v5: response is flat — project fields are at the top level,
                // and relations like `categoria` are returned as plain objects { id, Nombre }
                // Strapi v4: fields are nested under project.attributes, relations under .data.attributes
                const grouped = projects.reduce((acc, project) => {
                    const attrs = project.attributes || project; // v4 uses .attributes; v5 is flat

                    // v5: categoria = { id, Nombre, ... }  (direct object)
                    // v4: categoria = { data: { id, attributes: { Nombre, ... } } }
                    const catV5 = attrs.categoria && typeof attrs.categoria === 'object' && !Array.isArray(attrs.categoria) && attrs.categoria.Nombre
                        ? attrs.categoria
                        : null;
                    const catV4 = attrs.categoria?.data?.attributes ?? null;
                    const catName = (catV5?.Nombre || catV4?.Nombre || 'OTROS').toUpperCase();
                    const titulo = attrs.Titulo || 'Sin título';
                    const slug = attrs.Slug || project.documentId || project.id;
                    const orden = attrs.Orden ?? 999;

                    const existingCat = acc.find(c => c.title === catName);

                    if (existingCat) {
                        existingCat.items.push({ titulo, slug, orden });
                    } else {
                        acc.push({
                            title: catName,
                            items: [{ titulo, slug, orden }]
                        });
                    }
                    return acc;
                }, []);

                // Sort categories based on a specific order
                const order = ['PELÍCULAS', 'IMPACTO', 'EVENTOS'];
                const sorted = grouped.sort((a, b) => {
                    const indexA = order.indexOf(a.title);
                    const indexB = order.indexOf(b.title);

                    // If both are in the order list, follow the list
                    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                    // If only one is in the list, that one comes first
                    if (indexA !== -1) return -1;
                    if (indexB !== -1) return 1;
                    // Otherwise, alphabetical
                    return a.title.localeCompare(b.title);
                });

                // Sort items within each category by Orden
                sorted.forEach(cat => {
                    cat.items.sort((a, b) => a.orden - b.orden);
                });

                setCategories(sorted);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching projects from Strapi:", err);
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { categories, loading, error };
};
