function contatoWhatsApp(message) {
    const phoneNumber = '5575981092578'; // Substitua pelo número de contato da Vitória
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
