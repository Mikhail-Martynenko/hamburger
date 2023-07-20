export enum HamburgerSize {
    SMALL = 'small',
    LARGE = 'large',
}

export enum HamburgerStuffing {
    CHEESE = 'cheese',
    SALAD = 'salad',
    POTATO = 'potato',
}

export enum HamburgerTopping {
    MAYO = 'mayo',
    SPICE = 'spice'
}

class Hamburger {
    private toppings: HamburgerTopping[] = [];

    private readonly BASE_PRICE_SMALL = 50;
    private readonly BASE_PRICE_LARGE = 100;
    private readonly STUFFING_PRICE_CHEESE = 10;
    private readonly STUFFING_PRICE_SALAD = 20;
    private readonly STUFFING_PRICE_POTATO = 15;
    private readonly TOPPING_PRICE = 15;

    private readonly BASE_CALORIES_SMALL = 20;
    private readonly BASE_CALORIES_LARGE = 40;
    private readonly STUFFING_CALORIES_CHEESE = 20;
    private readonly STUFFING_CALORIES_SALAD = 5;
    private readonly STUFFING_CALORIES_POTATO = 10;
    private readonly TOPPING_CALORIES_MAYO = 5;

    private isToppingUnique(topping: HamburgerTopping): boolean {
        return !this.toppings.includes(topping);
    }

    private hasTopping(topping: HamburgerTopping): boolean {
        return this.toppings.includes(topping);
    }

    private filterOutTopping(topping: HamburgerTopping): void {
        this.toppings = this.toppings.filter((item) => item !== topping);
    }

    constructor(private size: HamburgerSize, private stuffing: HamburgerStuffing) {
    }

    // Добавить добавку к гамбургеру. Можно добавить несколько добавок, при условии, что они разные.
    addTopping(topping: HamburgerTopping): void {
        if (!this.isToppingUnique(topping)) {
            throw new Error('Такая добавка уже есть');
        }
        this.toppings.push(topping);
    }

    // Убрать добавку, при условии, что она ранее была добавлена.
    removeTopping(topping: HamburgerTopping): void {
        if (!this.hasTopping(topping)) {
            throw new Error('Такой добавки нет');
        }
        this.filterOutTopping(topping);
    }

    // Получить список добавок.
    getToppings(): HamburgerTopping[] {
        return this.toppings
    }

    getToppingsCalories(): number {
        let toppingsCalories = 0;
        if (!this.toppings.includes(HamburgerTopping.MAYO)) return toppingsCalories
        toppingsCalories += this.TOPPING_CALORIES_MAYO;

        return toppingsCalories;
    }

    // Узнать размер гамбургера
    getSize(): HamburgerSize {
        return this.size
    }

    // Узнать начинку гамбургера
    getStuffing(): HamburgerStuffing {
        return this.stuffing
    }

    calculatePrice(): number {
        let price = 0;
        switch (this.size) {
            case HamburgerSize.SMALL:
                price += this.BASE_PRICE_SMALL;
                break;
            case HamburgerSize.LARGE:
                price += this.BASE_PRICE_LARGE;
                break;
        }
        switch (this.stuffing) {
            case HamburgerStuffing.CHEESE:
                price += this.STUFFING_PRICE_CHEESE;
                break;
            case HamburgerStuffing.SALAD:
                price += this.STUFFING_PRICE_SALAD;
                break;
            case HamburgerStuffing.POTATO:
                price += this.STUFFING_PRICE_POTATO;
                break;
        }
        price += this.toppings.length * this.TOPPING_PRICE;
        return price;
    }

    calculateCalories(): number {
        let calories = 0;
        switch (this.size) {
            case HamburgerSize.SMALL:
                calories += this.BASE_CALORIES_SMALL;
                break;
            case HamburgerSize.LARGE:
                calories += this.BASE_CALORIES_LARGE;
                break;
        }
        switch (this.stuffing) {
            case HamburgerStuffing.CHEESE:
                calories += this.STUFFING_CALORIES_CHEESE;
                break;
            case HamburgerStuffing.SALAD:
                calories += this.STUFFING_CALORIES_SALAD;
                break;
            case HamburgerStuffing.POTATO:
                calories += this.STUFFING_CALORIES_POTATO;
                break;
        }
        return this.getToppingsCalories() + calories;
    }
}

export default Hamburger;