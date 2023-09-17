export const formatPrice = (price) => {

    // Currently here we using currency as USD and we can change it
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: "USD"
    }).format(price);
}