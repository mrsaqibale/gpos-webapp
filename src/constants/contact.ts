/** Display and WhatsApp deep link (digits only after wa.me/). */
export const WHATSAPP_DISPLAY = '+353 2210200';
export const WHATSAPP_HREF = 'https://wa.me/3532210200';

/** Office landline — opens dialer. */
export const PHONE_DISPLAY = '062 21302';
export const PHONE_HREF = 'tel:+3536221302';

/** Email — opens default mail client. */
export const EMAIL_DISPLAY = 'demo@gposapp.com';
export const EMAIL_HREF = `mailto:${EMAIL_DISPLAY}`;

/** Office address — opens in Google Maps. */
export const OFFICE_ADDRESS_LINE_1 = 'Barrack St, Bansha,';
export const OFFICE_ADDRESS_LINE_2 = 'Co. Tipperary, E34 X402, Ireland';
export const OFFICE_ADDRESS_FULL = `${OFFICE_ADDRESS_LINE_1.replace(/,$/, '')}, ${OFFICE_ADDRESS_LINE_2}`;
export const OFFICE_ADDRESS_MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    OFFICE_ADDRESS_FULL,
)}`;
