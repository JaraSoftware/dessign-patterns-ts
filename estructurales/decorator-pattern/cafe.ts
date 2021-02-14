interface Cafe {
    getDescripcion(): string;
    getPrecio(): number;
}

class CafeCorto implements Cafe {

    public getDescripcion(): string {
        return "Café corto";
    }

    public getPrecio(): number {
        return 0.40;
    }

}

// Decorator pattern!
class ConLeche implements Cafe {

    cafe: Cafe;

    constructor(cafe: Cafe) {
        this.cafe = cafe;
    }

    getDescripcion(): string {
        return `${this.cafe.getDescripcion()} con leche`;
    }

    getPrecio(): number {
        return this.cafe.getPrecio() + 0.20;
    }

}

const cafeCorto = new CafeCorto();
const cafeCortoConLeche = new ConLeche(cafeCorto);

console.log(cafeCortoConLeche.getDescripcion());
console.log(cafeCortoConLeche.getPrecio());
