import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    
    const to = process.env.SHOP_NUMBER;

     

    const url = 'https://graph.facebook.com/v22.0/541443855729706/messages';

    const payload = {
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: {
        body:'You Got an order go there https://aryan0singhlucknowbackery.netlify.app/admin/order'
      },
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`, // ✅ correct

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
