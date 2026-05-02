$(document).ready(function() {
    
    // 1. Skills Animation on Scroll
    let skillsAnimated = false;
    
    function animateSkills() {
        const skillsSection = $('#skills');
        if (skillsSection.length === 0) return;
        
        const sectionTop = skillsSection.offset().top;
        const windowHeight = $(window).height();
        const scrollPosition = $(window).scrollTop();
        
        // When the section is visible in the viewport
        if (scrollPosition + windowHeight > sectionTop + 100 && !skillsAnimated) {
            $('.progress-fill').each(function() {
                const targetWidth = $(this).data('width');
                $(this).animate({ width: targetWidth }, 1500);
            });
            skillsAnimated = true;
        }
    }
    
    // Trigger on scroll and on load
    $(window).on('scroll', animateSkills);
    animateSkills();

    // 2. Formation Accordion
    $('.accordion-header').on('click', function() {
        const currentHeader = $(this);
        const currentContent = currentHeader.next('.accordion-content');
        
        // Close other open items
        $('.accordion-content').not(currentContent).slideUp(300);
        $('.accordion-header').not(currentHeader).removeClass('active');
        
        // Toggle the clicked item
        currentContent.slideToggle(300);
        currentHeader.toggleClass('active');
    });

    // 3. Contact Form Validation
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const nameInput = $('#name');
        const emailInput = $('#email');
        const messageInput = $('#message');
        
        // Reset errors
        $('.form-group').removeClass('error');
        $('#form-messages').removeClass('success').hide();
        
        // Validate Name
        if (nameInput.val().trim() === '') {
            nameInput.parent().addClass('error');
            isValid = false;
        }
        
        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.val().trim())) {
            emailInput.parent().addClass('error');
            isValid = false;
        }
        
        // Validate Message
        if (messageInput.val().trim() === '') {
            messageInput.parent().addClass('error');
            isValid = false;
        }
        
        // If valid, simulate submission
        if (isValid) {
            // Show success message
            $('#form-messages')
                .text('Merci ' + nameInput.val() + ' ! Votre message a bien été envoyé.')
                .addClass('success')
                .fadeIn();
                
            // Reset form
            this.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                $('#form-messages').fadeOut();
            }, 5000);
        }
    });
});
