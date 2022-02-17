import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";

@Entity() // esto genera una tabla sql llamada 'coffee' como la clase. Si quiero un nombre distinto, le paso el string entre los parentesis
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    brand: string;
    
    @JoinTable() //  Join the 2 tables - only the OWNER-side does this
    @ManyToMany(
        type => Flavor,
        flavor => flavor.coffees, // what is "coffee" within the Flavor Entity 
        {
            cascade: true // cada insert tambien crea a este modelo y lo persiste
        }
    )
    flavors: Flavor[];
}