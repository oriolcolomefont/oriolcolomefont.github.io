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
        'footer': 'footer-container',
        'courses-section': 'courses-container'
    });

    // Load dynamic components with data
    const experienceData = [
        {
            company: 'My Sheet Music Transcriptions',
            role: 'Growth Lead & Product Owner (January 2025 — Present)',
            description: 'Leading the R&D and product development roadmap, leveraging open-source technology and the right talent to drive innovation and position the company at the forefront of industry advancements. The added value is not only having the right technical partners, but deeply understanding the craft we need to empower—MUSIC, the creative process, the rawness, and the intent behind every note. The focus is on augmenting the artist\'s expression and streamlining mundane tasks to leave room for the artistry to shine, rather than replacing the entire pipeline with sterile efficiency.'
        },
        {
            company: 'UPF-BMAT Chair in AI and Music',
            role: 'Member of the Scientific Committee (March 2024 — Present)',
            description: 'Invited to join the Scientific Committee of the newly launched UPF-BMAT Chair in AI and Music, aimed at advancing open large-scale AI models for music understanding. Contributing expertise in AI, music technology, and research direction alongside former MTG colleagues.'
        },
        {
            company: 'My Sheet Music Transcriptions',
            role: 'Key Account Manager & Tech Lead (January 2023 — January 2024)',
            description: 'Led B2C and B2B music-tech initiatives, managed key accounts, and drove strategic partnerships.'
        },
        {
            company: 'My Sheet Music Transcriptions',
            role: 'Music Specialist, Growth, and Tech Lead (January 2022 — January 2023)',
            description: 'Curated music, advised on services, and optimized the customer experience, while also providing administrative and operational support.'
        },
        {
            company: 'My Sheet Music Transcriptions',
            role: 'Assistant Manager (January 2020 — January 2021)',
            description: 'After becoming a valuable asset, secured a full-time position that involved assisting with customer service-related tasks.'
        },
        {
            company: 'My Sheet Music Transcriptions',
            role: 'Music Transcriber (September 2019 — May 2020)',
            description: 'Focused on precise music transcription, arrangement, and engraving as a freelancer.'
        },
        {
            company: 'Freelance',
            role: 'Musician (September 2013 — Present)',
            description: 'From performing on stage, composing original pieces, arranging music for different ensembles, and teaching others to explore their musical potential, to managing and producing musical projects from start to finish, I enjoy bringing ideas to life and sharing the joy of music with others.'
        }
    ];

    const educationData = [
        {
            degree: 'Master of Science in Music and Sound Computing',
            institution: 'Universitat Pompeu Fabra, Barcelona',
            period: 'January 2020 — January 2024',
            description: 'The program combined approaches in topics such as audio signal processing, machine learning, perception and cognition, and semantic technologies, giving me the scientific and technological background needed to continue a research and professional career on tasks that support practical applications related to the analysis, description, synthesis, transformation, and production of sound and music.'
        },
        {
            degree: 'Master of Arts in Music Theory and Composition',
            institution: 'ESMuC, Barcelona',
            period: 'January 2019 — January 2020',
            description: 'I received specialized training in music for visual media, including courses in composition, orchestration, sound design, and production techniques. The course equipped me with skills to create soundtracks and other music for the media using state-of-the-art tools.'
        },
        {
            degree: 'Bachelor\'s Degree in Music',
            institution: 'ESEM Taller de Músics, Barcelona',
            period: 'January 2014 — January 2018',
            description: 'Guitar Performance Concentration. This four-year program focused on developing technical mastery, artistic expression, and professional skills as musicians. The degree combined core music education—such as theory, history, and ensemble work—with specialized guitar training in technique, repertoire, and performance across various genres.'
        }
    ];

    const internshipsData = [
        {
            role: 'Master\'s Thesis Student in Music Applied Machine Learning',
            company: 'Epidemic Sound, Stockholm',
            period: 'January 2023 — July 2023',
            description: 'Researched deep music embeddings with the Music Applied and Machine Learning team, focusing on automatic music segmentation using advanced machine learning techniques. Conducted experiments and data analysis on Google Cloud Platform while staying current with developments in music analytics, production, licensing, and ML. Collaborated with the A&R team to initiate music theory seminars, strengthening cross-functional communication and industry insight.'
        }
    ];

    const referencesData = [
        {
            name: 'Carl Thomé',
            company: 'Epidemic Sound',
            position: 'Senior Research Engineer',
            email: 'carl.thome@epidemicsound.com'
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

    // Load education items
    const educationContainer = document.getElementById('education-container');
    if (educationContainer) {
        const educationHtml = await Promise.all(
            educationData.map(async (data) => {
                const response = await fetch('components/education-item.html');
                const template = await response.text();
                return componentLoader.renderTemplate(template, data);
            })
        );
        educationContainer.innerHTML = educationHtml.join('');
    }

    // Load internship items
    const internshipsContainer = document.getElementById('internships-container');
    if (internshipsContainer) {
        const internshipsHtml = await Promise.all(
            internshipsData.map(async (data) => {
                const response = await fetch('components/internship-item.html');
                const template = await response.text();
                return componentLoader.renderTemplate(template, data);
            })
        );
        internshipsContainer.innerHTML = internshipsHtml.join('');
    }

    // Load reference items
    const referencesContainer = document.getElementById('references-container');
    if (referencesContainer) {
        const referencesHtml = await Promise.all(
            referencesData.map(async (data) => {
                const response = await fetch('components/reference-item.html');
                const template = await response.text();
                return componentLoader.renderTemplate(template, data);
            })
        );
        referencesContainer.innerHTML = referencesHtml.join('');
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
