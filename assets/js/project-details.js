(function ($) {
    "use strict";

    $(document).ready(function () {
        // Get project ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');

        if (projectId && projectsData[projectId]) {
            const project = projectsData[projectId];

            // Update Hero Section (Title)
            $('#project-title-hero').text(project.subtitle);
            $('.breadcrumb-item.active').text(project.subtitle);

            // Update Main Header
            $('#project-subtitle').text(project.subtitle);

            // Description (Hidden by default in new layout, but populated)
            $('#project-description').text(project.description);

            // --- Images Logic ---
            const verticalContainer = $('#vertical-images-container');
            const bottomContainer = $('#bottom-gallery-container');
            verticalContainer.empty();
            bottomContainer.empty();

            if (project.images && project.images.length > 0) {
                // First 2 images -> Vertical Left Column
                // They should be side-by-side in the left column (which is col-lg-7).
                // So we create two col-6 divs.

                // Image 1
                if (project.images[0]) {
                    verticalContainer.append(`
                        <div class="col-6 mb-30 mb-lg-0">
                            <div class="vertical-img-wrapper h-100">
                                <img src="${project.images[0]}" alt="" class="img-fluid" style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                            </div>
                        </div>
                    `);
                }

                // Image 2
                if (project.images[1]) {
                    verticalContainer.append(`
                        <div class="col-6 mb-30 mb-lg-0">
                            <div class="vertical-img-wrapper h-100">
                                <img src="${project.images[1]}" alt="" class="img-fluid" style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                            </div>
                        </div>
                    `);
                }

                // Remaining Images (Index 2+) -> Bottom Grid
                if (project.images.length > 2) {
                    for (let i = 2; i < project.images.length; i++) {
                        bottomContainer.append(`
                            <div class="col-lg-3 col-md-4 col-sm-6">
                                <div class="single-gallery-image mb-30">
                                    <img src="${project.images[i]}" alt="" class="img-fluid" style="width: 100%; border-radius: 5px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                                </div>
                            </div>
                        `);
                    }
                }
            }

            // --- Project Brief Table ---
            const briefBody = $('#project-brief-body');
            briefBody.empty();

            function createRow(label, value) {
                if (!value) return;

                let content = value;
                if (Array.isArray(value)) {
                    content = '<ul style="list-style: none; padding-left: 0; margin-bottom: 0;">';
                    value.forEach(item => {
                        content += `<li style="margin-bottom: 5px; position: relative; padding-left: 15px; font-size: 14px;"><i class="fa fa-caret-right" style="position: absolute; left: 0; top: 4px; color: #000; font-size: 12px;"></i> ${item}</li>`;
                    });
                    content += '</ul>';
                }

                const row = `
                    <tr>
                        <td style="font-weight: 600; color: #000; width: 30%; vertical-align: top; background-color: #fff;">${label}</td>
                        <td style="color: #333; vertical-align: top; background-color: #fff;">${content}</td>
                    </tr>
                `;
                briefBody.append(row);
            }

            createRow('Scope', project.scope);
            createRow('Clients', project.clients);
            createRow('Sites built to date', project.sites);
            createRow('Regions', project.regions);

            // Ensure the brief box is visible
            $('.project-brief-box').show();

        } else {
            // Handle case where project ID is not found
            $('#project-subtitle').text('Project Not Found');
            $('.project-brief-box').hide();
        }
    });

})(jQuery);
