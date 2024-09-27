import { BehaviorSubject } from "rxjs";

export class Repository<T> {
    protected $list = new BehaviorSubject<T[]>([]);

    protected storedKey = '';

    constructor(key: string) {
        this.storedKey = key;
        if(this.$list.getValue().length == 0) {
          const data = localStorage.getItem(key);
          if(data !== null) {
            this.$list.next(JSON.parse(data));
          }
        }
        this.$list.subscribe(resp => {
            localStorage.setItem(this.storedKey, JSON.stringify(resp));
        })
    }

    get list() {
        return this.$list.asObservable();
    }

    guardar(data: T) {
        const values = this.$list.getValue();
        values.push(data);
        this.$list.next(values);
    }

    actualizar(index: number, data: T) {

        const values = this.$list.getValue();
        values[index] = data;
        this.$list.next(values);
    }

    borrar(index: number) {
        const values = this.$list.getValue();
        values.splice(index, 1);
        this.$list.next(values);
    }
}
