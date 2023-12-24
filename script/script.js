async function loadAndUseTranslations() {
    try {
      // Fetch the JSON file containing translations
      const response = await fetch("spanish-translation.json");
  
      // Check for successful response before parsing
      if (!response.ok) {
        throw new Error(`Error fetching translations: ${response.status}`);
      }
  
      // Parse the JSON data into an object
      const translations = await response.json();
  
      // Utilize the translations (example: change the content of an element)
      const element = document.querySelector(".text");
      element.textContent = translations["Full-Stack Web Developer"];
  
    } catch (error) {
      console.error("Error loading translations:", error);
      // Handle the error gracefully, e.g., display a message to the user
    }
  }
  
  // Call the async function to initiate the process
  loadAndUseTranslations();