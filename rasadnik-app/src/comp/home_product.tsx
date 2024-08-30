interface Product{
    id: number;
    Name: string;
    price: string;
    images: string;
    cat: string;
    type: string;
}

interface Product {
    id: number;
    Name: string;
    price: string;
    images: string;
    cat: string;
    type: string;
  }

/*
const Homeproduct: Array<{
    id: number;
    Name: string;
    price: string;
    images: string;
    cat: string;
    type: string;
}> = 
[
    {
        id: 1,
        Name: 'Kaktus Grusoni S1',
        price: '10.000 RSD',
        images: 'images/img1.webp',
        cat: 'Saksijsko cvece',
        type: 'new',
    },
    {
        id: 2,
        Name: 'Kaktus S2',
        price: '3.300 RSD',
        images: 'images/img2.webp',
        cat: 'Saksijsko cvece',
        type: 'new',
    },
    {
        id: 3,
        Name: 'Pahira S9',
        price: '1.300 RSD',
        images: 'images/img3.webp',
        cat: 'Saksijsko cvece',
        type: 'new',
    },
    {
        id: 4,
        Name: 'Pahira S10',
        price: '8.500 RSD',
        images: 'images/img4.webp',
        cat: 'Saksijsko cvece',
        type: 'new',
    },
    {
        id: 5,
        Name: 'Palma Howea S8',
        price: '5.500 RSD',
        images: 'images/img5.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 6,
        Name: 'Palma Šamadora S7',
        price: '800 RSD',
        images: 'images/img6.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 7,
        Name: 'Šeflera S22',
        price: '1.500 RSD',
        images: 'images/img7.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 8,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img8.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 9,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img9.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 10,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img10.webp',
        cat: 'Saksijsko cvece',
        type: 'featured',
    },
    {
        id: 11,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img11.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 12,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img12.webp',
        cat: 'Saksijsko cvece',
        type: 'featured',
    },
    {
        id: 13,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img13.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    }
]
export default Homeproduct
*/
const Homeproduct: Product[] = [
    {
      id: 1,
      Name: 'Kaktus Grusoni S1',
      price: '10.000 RSD',
      images: 'images/img1.webp',
      cat: 'Saksijsko cvece',
      type: 'new',
    },
    {
        id: 2,
        Name: 'Kaktus S2',
        price: '3.300 RSD',
        images: 'images/img2.webp',
        cat: 'Saksijsko cvece',
        type: 'new',
    },
    {
        id: 3,
        Name: 'Pahira S9',
        price: '1.300 RSD',
        images: 'images/img3.webp',
        cat: 'Saksijsko cvece',
        type: 'new',
    },
    {
        id: 4,
        Name: 'Pahira S10',
        price: '8.500 RSD',
        images: 'images/img4.webp',
        cat: 'Saksijsko cvece',
        type: 'new',
    },
    {
        id: 5,
        Name: 'Palma Howea S8',
        price: '5.500 RSD',
        images: 'images/img5.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 6,
        Name: 'Palma Šamadora S7',
        price: '800 RSD',
        images: 'images/img6.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 7,
        Name: 'Šeflera S22',
        price: '1.500 RSD',
        images: 'images/img7.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 8,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img8.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 9,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img9.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 10,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img10.webp',
        cat: 'Saksijsko cvece',
        type: 'featured',
    },
    {
        id: 11,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img11.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    },
    {
        id: 12,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img12.webp',
        cat: 'Saksijsko cvece',
        type: 'featured',
    },
    {
        id: 13,
        Name: 'Zamia S30',
        price: '15.000 RSD',
        images: 'images/img13.webp',
        cat: 'Saksijsko cvece',
        type: 'top',
    }
]
export default Homeproduct;