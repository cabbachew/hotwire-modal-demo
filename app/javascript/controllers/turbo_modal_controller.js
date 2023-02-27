import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbo-modal"
export default class extends Controller {
  static targets = ["modal"]

  connect() {
  }

  // When close button is clicked
  hideModal() {
    this.element.parentElement.removeAttribute("src") // Enables re-opening on subsequent clicks
    this.element.remove()
  }

  // When form is submitted
  submitEnd(e) {
    if (e.detail.success) {
      this.hideModal()
    }
  }

  closeWithEscape(e) {
    if (e.key === "Escape") {
      this.hideModal()
    }
  }

  closeBackground(e) {
    if (e && this.modalTarget.contains(e.target)) {
      return
    }
    this.hideModal()
  }
}
