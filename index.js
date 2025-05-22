
function addElementToDOM(containerId, content) {
    const container = document.getElementById(containerId)
    if (!container) return
    container.innerHTML = content
}

function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId)
    if (element) {
        element.remove()
    }
}
  
function simulateClick(containerId, content) {
    addElementToDOM(containerId, content)
}
  
function handleFormSubmit(formId, containerId) {
    const form = document.getElementById(formId)
    const input = form.querySelector('input')
    const container = document.getElementById(containerId)
    const errorMessage = document.getElementById('error-message')
  
    if (!input.value.trim()) {
        if (errorMessage) {
            errorMessage.textContent = 'Input cannot be empty'
            errorMessage.classList.remove('hidden')
        }
        return
    }
  
    if (errorMessage) {
        errorMessage.textContent = ''
        errorMessage.classList.add('hidden')
    }
  
    if (container) {
        container.innerHTML = input.value.trim()
    }
}
  
module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
}
  