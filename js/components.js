// Simple Component Loader
class ComponentLoader {
    constructor() {
        this.components = {};
    }

    // Load a component from file
    async loadComponent(name, targetId) {
        try {
            const response = await fetch(`components/${name}.html`);
            const html = await response.text();
            document.getElementById(targetId).innerHTML = html;
        } catch (error) {
            console.error(`Error loading component ${name}:`, error);
        }
    }

    // Load multiple components
    async loadComponents(componentMap) {
        const promises = Object.entries(componentMap).map(([name, targetId]) => 
            this.loadComponent(name, targetId)
        );
        await Promise.all(promises);
    }

    // Render template with data
    renderTemplate(template, data) {
        let result = template;
        Object.entries(data).forEach(([key, value]) => {
            result = result.replace(new RegExp(`{{${key}}}`, 'g'), value);
        });
        return result;
    }

    // Load and render a template component
    async loadTemplateComponent(name, targetId, data) {
        try {
            const response = await fetch(`components/${name}.html`);
            const template = await response.text();
            const rendered = this.renderTemplate(template, data);
            document.getElementById(targetId).innerHTML = rendered;
        } catch (error) {
            console.error(`Error loading template component ${name}:`, error);
        }
    }
}

// Initialize component loader
const componentLoader = new ComponentLoader();

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    // Load static components
    await componentLoader.loadComponents({
        'header': 'header-container',
        'hero': 'hero-container',
        'about': 'about-container',
        'contact': 'contact-container',
        'footer': 'footer-container'
    });

    // Load dynamic components with data
    const experienceData = [
        {
            company: 'My Sheet Music Transcriptions',
            role: 'Growth Lead & Product Owner (2022-Present)',
            description: 'Leading R&D and product development roadmaps, driving business growth through innovative music-tech solutions.'
        },
        {
            company: 'Epidemic Sound',
            role: 'Master\'s Thesis Student (2023)',
            description: 'Researching deep music embeddings and Music Information Retrieval.'
        }
    ];

    const projectsData = [
        {
            title: 'Uncovering High-Level Content in the Time Domain',
            description: 'Leveraging self-supervised deep neural networks for deep audio embeddings with applications to boundary detection tasks.'
        },
        {
            title: 'Arab-Andalusian Motif Development',
            description: 'Towards a systematic exploration of motif development in Arab-Andalusian Music.'
        }
    ];

    // Load experience items
    const experienceContainer = document.getElementById('experience-container');
    if (experienceContainer) {
        const experienceHtml = await Promise.all(
            experienceData.map(async (data) => {
                const response = await fetch('components/experience-item.html');
                const template = await response.text();
                return componentLoader.renderTemplate(template, data);
            })
        );
        experienceContainer.innerHTML = experienceHtml.join('');
    }

    // Load project cards
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        const projectsHtml = await Promise.all(
            projectsData.map(async (data) => {
                const response = await fetch('components/project-card.html');
                const template = await response.text();
                return componentLoader.renderTemplate(template, data);
            })
        );
        projectsContainer.innerHTML = projectsHtml.join('');
    }
});
