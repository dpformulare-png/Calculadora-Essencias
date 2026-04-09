// Alpine.js logic for the Formulare application

function mainApp() {
    return {
        // Data properties
        formData: {
            // Initialize form fields with default values
            name: '',
            email: '',
            message: ''
        },
        // Method to handle form submission
        submitForm() {
            // Perform validation, then submit the form data
            console.log('Form submitted!', this.formData);
            // Reset form fields after submission
            this.resetForm();
        },
        // Method to reset form fields
        resetForm() {
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
        },
        // Additional event handlers and logic
        init() {
            // Any initialization logic can go here
        }
    };
}