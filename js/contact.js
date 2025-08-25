// Contact page functionality

// Initialize contact page
function initContact() {
    initContactForm();
}

// Initialize contact form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleContactSubmit);
    
    // Form validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!validateContactForm(data)) {
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset form
        e.target.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        
        // Optional: Auto-scroll to top to show message
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    }, 1500);
}

// Validate contact form
function validateContactForm(data) {
    let isValid = true;
    const errors = {};
    
    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        errors.name = 'Please enter your full name (at least 2 characters)';
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.email = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Subject validation
    if (!data.subject) {
        errors.subject = 'Please select a subject';
        isValid = false;
    }
    
    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        errors.message = 'Please enter a message (at least 10 characters)';
        isValid = false;
    }
    
    // Display errors
    Object.keys(errors).forEach(field => {
        displayFieldError(field, errors[field]);
    });
    
    return isValid;
}

// Validate individual field
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    let error = '';
    
    switch(field.name) {
        case 'name':
            if (!value || value.length < 2) {
                error = 'Please enter your full name (at least 2 characters)';
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value || !emailRegex.test(value)) {
                error = 'Please enter a valid email address';
            }
            break;
            
        case 'subject':
            if (!value) {
                error = 'Please select a subject';
            }
            break;
            
        case 'message':
            if (!value || value.length < 10) {
                error = 'Please enter a message (at least 10 characters)';
            }
            break;
    }
    
    if (error) {
        displayFieldError(field.name, error);
    } else {
        clearFieldError(field);
    }
}

// Display field error
function displayFieldError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    if (!field) return;
    
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;
    
    // Remove existing error
    const existingError = formGroup.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error class
    field.classList.add('error');
    
    // Create error element
    const errorEl = document.createElement('div');
    errorEl.className = 'field-error';
    errorEl.style.cssText = `
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    `;
    errorEl.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    
    // Insert error after field
    formGroup.appendChild(errorEl);
}

// Clear field error
function clearFieldError(e) {
    const field = e.target || e;
    const formGroup = field.closest('.form-group');
    if (!formGroup) return;
    
    // Remove error class
    field.classList.remove('error');
    
    // Remove error message
    const errorEl = formGroup.querySelector('.field-error');
    if (errorEl) {
        errorEl.remove();
    }
}

// Character counter for message field
function initCharacterCounter() {
    const messageField = document.getElementById('message');
    if (!messageField) return;
    
    const maxLength = 500;
    const counter = document.createElement('div');
    counter.className = 'char-counter';
    counter.style.cssText = `
        text-align: right;
        font-size: 0.875rem;
        color: #666;
        margin-top: 0.25rem;
    `;
    
    const updateCounter = () => {
        const remaining = maxLength - messageField.value.length;
        counter.textContent = `${remaining} characters remaining`;
        counter.style.color = remaining < 50 ? '#dc3545' : '#666';
    };
    
    messageField.addEventListener('input', updateCounter);
    messageField.setAttribute('maxlength', maxLength);
    messageField.parentNode.appendChild(counter);
    
    updateCounter();
}

// Initialize FAQ functionality if on contact page
function initContactFAQ() {
    // FAQ functionality is already initialized in main.js
    // This could be extended for contact-specific FAQ features
}

// Add CSS for form validation
const contactStyle = document.createElement('style');
contactStyle.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #dc3545 !important;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1) !important;
    }
    
    .field-error {
        animation: slideInDown 0.3s ease;
    }
    
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(contactStyle);

// Initialize contact page when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('contact.html')) {
        initContact();
        initCharacterCounter();
        initContactFAQ();
    }
});