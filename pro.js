$(document).ready(function() {
    $('#bookingForm').submit(function(event) {
        event.preventDefault()
        var ticketQuantity = parseInt($('#ticketQuantity').val())
        
        if (isNaN(ticketQuantity) || ticketQuantity < 1 || ticketQuantity > 10) {
            alert('Please enter a valid ticket quantity (1 to 10).')
            return
        }
        setTimeout(function() {
            $('#bookingForm').hide()
            $('#img1').hide()
            $('#confirmationMessage').show()
        }, 1000)
        
    })
})