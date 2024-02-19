const seatSelection = document.querySelectorAll('#seat-selection button');

let seatLeftCount = 40;
let selectedSeatCount = 0;
let ticketPrice = 0;
const maxSeatSelection = 4;

for (const seat of seatSelection) {
    seat.addEventListener('click', function () {
        if (!seat.classList.contains('bg-green-400') && selectedSeatCount < maxSeatSelection) {     //one seat can't multiple selection
            seat.classList.add('bg-green-400');
            seatLeftCount--
            document.getElementById('seat-left').innerText = seatLeftCount;
            selectedSeatCount++
            document.getElementById('selected-seat-count').innerText = selectedSeatCount;

            const seatNumber = seat.innerText;
            const selectedSeatNumber = document.getElementById('selected-seat-number');
            const p = document.createElement('p');
            p.innerText = selectedSeatCount + '. ' + seatNumber;
            selectedSeatNumber.appendChild(p);

            const perTicket = 550;
            ticketPrice = perTicket + ticketPrice;
            document.getElementById('total-price').innerText = ticketPrice;
            document.getElementById('grand-total').innerText = ticketPrice;
        }
    })
}

// discount using coupon
const applyButton = document.getElementById('apply-button');
applyButton.addEventListener('click', function () {
    const getCoupon = document.getElementById('get-coupon');
    const getCouponValue = getCoupon.value.split(' ').join('').toUpperCase();
    const getCouponCouple = document.getElementById('get-coupon');
    const getCouponCoupleValue = getCouponCouple.value;

    const hideThis = document.getElementById('hide-this');

    if (getCouponValue === 'NEW15') {
        if (selectedSeatCount === 4) {
            const discountedPrice = ticketPrice * 0.15;
            document.getElementById('grand-total').innerText = ticketPrice - discountedPrice;
            hideThis.classList.add('hidden');
        }
        else {
            alert('Please buy at least 4 ticket for discount.');
        }
    }
    else if (getCouponCoupleValue === 'Couple 20') {
        if (selectedSeatCount === 4) {
            const discountedPriceForCouple = ticketPrice * 0.2;
            document.getElementById('grand-total').innerText = ticketPrice - discountedPriceForCouple;
            hideThis.classList.add('hidden');
        }
        else {
            alert('Please buy at least 4 ticket for discount.');
        }
    }
    else {
        alert('Invalid coupon!');
    }
    getCoupon.value = '';
    getCouponCouple.value = '';
});