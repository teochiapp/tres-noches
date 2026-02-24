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
                // Handling both Strapi v4/v5 response structures defensively
                const grouped = projects.reduce((acc, project) => {
                    const attrs = project.attributes || project; // v4 has attributes, v5 is flatter in some configs
                    const catData = attrs.categoria?.data?.attributes || attrs.categoria;
                    const catName = catData?.Nombre || 'OTROS';
                    const titulo = attrs.Titulo || 'Sin título';

                    const titleUpper = catName.toUpperCase();
                    const existingCat = acc.find(c => c.title === titleUpper);

                    if (existingCat) {
                        existingCat.items.push(titulo);
                    } else {
                        acc.push({
                            title: titleUpper,
                            items: [titulo]
                        });
                    }
                    return acc;
                }, []);

                // Sort categories if needed (e.g. alphabetical or specific order)
                // For now, just set what we have
                setCategories(grouped);
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
