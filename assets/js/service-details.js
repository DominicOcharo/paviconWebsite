/**
 * Service Details Dynamic Loader
 * Handles URL parameter parsing and dynamic content loading
 */

(function () {
    'use strict';

    // Get URL parameter
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Load service details when page loads
    function loadServiceDetails() {
        const serviceId = getUrlParameter('service');

        // If no service parameter, redirect to services page
        if (!serviceId) {
            window.location.href = 'services.html';
            return;
        }

        // Get service data
        const service = getServiceById(serviceId);

        // If service not found, redirect to services page
        if (!service) {
            console.error('Service not found:', serviceId);
            window.location.href = 'services.html';
            return;
        }

        // Update page content
        updatePageTitle(service);
        updateHeroSection(service);
        updateServiceContent(service);

        // Add animations
        addScrollAnimations();
    }

    // Update page title and meta tags
    function updatePageTitle(service) {
        document.title = service.title + ' - Pavicon Group';

        // Update meta description if exists
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', service.description.substring(0, 155) + '...');
        }
    }

    // Update hero section
    function updateHeroSection(service) {
        const heroTitle = document.querySelector('.hero-cap h2');
        if (heroTitle) {
            heroTitle.textContent = service.title;
        }

        // Re-add background image to hero
        const heroSection = document.querySelector('.single-slider');
        if (heroSection && service.heroImage) {
            heroSection.setAttribute('data-background', service.heroImage);
            heroSection.style.backgroundImage = `url('${service.heroImage}')`;
            heroSection.style.backgroundSize = 'cover';
            heroSection.style.backgroundPosition = 'center';
            heroSection.style.backgroundRepeat = 'no-repeat';
        }
    }

    // Update main service content
    function updateServiceContent(service) {
        const detailsCaption = document.querySelector('.details-caption');
        if (!detailsCaption) return;

        // Clear existing content
        detailsCaption.innerHTML = '';

        // Add service image at the top (400x150)
        if (service.detailImage) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'service-detail-image mb-40';
            imageContainer.innerHTML = `
                <img src="${service.detailImage}" alt="${service.title}" class="service-image">
            `;
            detailsCaption.appendChild(imageContainer);
        }

        // Add main description
        const mainDesc = document.createElement('p');
        mainDesc.className = 'service-main-description mb-40';
        mainDesc.textContent = service.description;
        detailsCaption.appendChild(mainDesc);

        // Add sub-services
        if (service.subServices && service.subServices.length > 0) {
            const subServicesSection = createSubServicesSection(service.subServices);
            detailsCaption.appendChild(subServicesSection);
        }

        // Add Project Briefs (New)
        if (service.projectBriefs && service.projectBriefs.length > 0) {
            const briefsSection = createProjectBriefSection(service.projectBriefs);
            detailsCaption.appendChild(briefsSection);
        }

        // Add portfolio information if available (Fallback/Legacy)
        if (service.portfolio) {
            const portfolioSection = createPortfolioSection(service.portfolio);
            detailsCaption.appendChild(portfolioSection);
        }

        // Add call to action
        const ctaSection = createCTASection();
        detailsCaption.appendChild(ctaSection);
    }

    // Create Project Brief section
    function createProjectBriefSection(briefs) {
        const section = document.createElement('div');
        section.className = 'project-brief-section mt-50 mb-40 wow fadeInUp';

        const mainHeading = document.createElement('h3');
        mainHeading.className = 'mb-30';
        mainHeading.textContent = 'Project Briefs';
        section.appendChild(mainHeading);

        briefs.forEach(brief => {
            const briefContainer = document.createElement('div');
            briefContainer.className = 'single-project-brief mb-40';

            if (brief.title) {
                const title = document.createElement('h4');
                title.className = 'mb-20';
                title.style.color = '#F28C28'; // Orange accent
                title.textContent = brief.title;
                briefContainer.appendChild(title);
            }

            const tableResponsive = document.createElement('div');
            tableResponsive.className = 'table-responsive';

            let tableHtml = `
                <table class="table table-bordered table-striped">
                    <tbody>
            `;

            if (brief.scope) {
                tableHtml += `
                    <tr>
                        <th style="width: 25%; background-color: #f8f9fa;">Scope</th>
                        <td>
                            <ul class="mb-0 pl-3">
                                ${brief.scope.map(s => `<li>${s}</li>`).join('')}
                            </ul>
                        </td>
                    </tr>
                `;
            }

            if (brief.clients) {
                tableHtml += `
                    <tr>
                        <th style="background-color: #f8f9fa;">Clients</th>
                        <td>${brief.clients.join(', ')}</td>
                    </tr>
                `;
            }

            if (brief.sitesBuilt) {
                tableHtml += `
                    <tr>
                        <th style="background-color: #f8f9fa;">Sites Built</th>
                        <td>${brief.sitesBuilt}</td>
                    </tr>
                `;
            }

            if (brief.regions) {
                tableHtml += `
                    <tr>
                        <th style="background-color: #f8f9fa;">Regions</th>
                        <td>${brief.regions.join(', ')}</td>
                    </tr>
                `;
            }

            tableHtml += `
                    </tbody>
                </table>
            `;

            tableResponsive.innerHTML = tableHtml;
            briefContainer.appendChild(tableResponsive);
            section.appendChild(briefContainer);
        });

        return section;
    }

    // Create sub-services section
    function createSubServicesSection(subServices) {
        const section = document.createElement('div');
        section.className = 'sub-services-section mt-50 mb-50';

        const heading = document.createElement('h3');
        heading.className = 'mb-30';
        heading.textContent = 'Our Solutions';
        section.appendChild(heading);

        const row = document.createElement('div');
        row.className = 'row';

        subServices.forEach((subService, index) => {
            const col = document.createElement('div');
            col.className = 'col-lg-6 col-md-12 mb-30';
            col.innerHTML = `
                <div class="sub-service-card wow fadeInUp" data-wow-delay="${index * 0.1}s">
                    <div class="sub-service-icon">
                        <i class="${subService.icon}"></i>
                    </div>
                    <h4>${subService.title}</h4>
                    <p>${subService.description}</p>
                    ${subService.features ? createFeatureList(subService.features) : ''}
                    ${subService.additionalInfo ? `<p class="additional-info mt-3"><em>${subService.additionalInfo}</em></p>` : ''}
                </div>
            `;
            row.appendChild(col);
        });

        section.appendChild(row);
        return section;
    }

    // Create feature list
    function createFeatureList(features) {
        let html = '<ul class="service-features">';
        features.forEach(feature => {
            html += `<li><i class="fas fa-check-circle"></i> ${feature}</li>`;
        });
        html += '</ul>';
        return html;
    }

    // Create portfolio section
    function createPortfolioSection(portfolio) {
        const section = document.createElement('div');
        section.className = 'portfolio-section mt-50 mb-40 wow fadeInUp';

        let html = '<h3 class="mb-30">Our Track Record</h3>';
        html += '<div class="row">';

        if (portfolio.clients) {
            html += `
                <div class="col-md-4 mb-30">
                    <div class="portfolio-item">
                        <h5><i class="fas fa-handshake"></i> Key Clients</h5>
                        <p>${portfolio.clients.join(', ')}</p>
                    </div>
                </div>
            `;
        }

        if (portfolio.sitesBuilt) {
            html += `
                <div class="col-md-4 mb-30">
                    <div class="portfolio-item">
                        <h5><i class="fas fa-chart-line"></i> Projects Delivered</h5>
                        <p>${portfolio.sitesBuilt}</p>
                    </div>
                </div>
            `;
        }

        if (portfolio.regions) {
            html += `
                <div class="col-md-4 mb-30">
                    <div class="portfolio-item">
                        <h5><i class="fas fa-globe-africa"></i> Regional Presence</h5>
                        <p>${portfolio.regions.join(', ')}</p>
                    </div>
                </div>
            `;
        }

        html += '</div>';
        section.innerHTML = html;
        return section;
    }

    // Create CTA section
    function createCTASection() {
        const section = document.createElement('div');
        section.className = 'cta-section mt-50 wow fadeInUp';
        section.innerHTML = `
            <h3>Ready to Get Started?</h3>
            <p>Contact us today to discuss how we can help bring your project to life with our expert solutions.</p>
            <div class="mt-30">
                <a href="contact.html" class="btn btn-primary">Contact Us</a>
                <a href="services.html" class="btn btn-outline ml-20">View All Services</a>
            </div>
        `;
        return section;
    }

    // Add scroll animations
    function addScrollAnimations() {
        // Initialize WOW.js if available
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadServiceDetails);
    } else {
        loadServiceDetails();
    }

})();
