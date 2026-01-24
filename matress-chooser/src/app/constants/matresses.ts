import { signal } from "@angular/core";
import { Mattress } from "../classes/mattress";

const mattressList = signal<Mattress[]>([
    
    new Mattress("Helix", "Sunset", {
        sleepside: "sleepside-side",
        feel: "feel-soft",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },799),
    new Mattress("Helix", "Moonlight", {
        sleepside: "sleepside-backstomach",
        feel: "feel-soft",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },799),
    new Mattress("Helix", "Dusk", {
        sleepside: "sleepside-backstomach",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },799),
    new Mattress("Helix", "Dawn", {
        sleepside: "sleepside-backstomach",
        feel: "feel-stiff",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },799),
    new Mattress("Helix", "Twilight", {
        sleepside: "sleepside-side",
        feel: "feel-stiff",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },799),
    new Mattress("Helix", "Midnight", {
        sleepside: "sleepside-side",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },799),
    new Mattress("Helix", "Sunset Elite", {
        sleepside: "sleepside-side",
        feel: "feel-soft",
        back: ["back-high","back-medium","back-low","back-none"],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },2999),
    new Mattress("Helix", "Midnight Elite", {
        sleepside: "sleepside-side",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none"],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },2999),
    new Mattress("Helix", "Twilight Elite", {
        sleepside: "sleepside-side",
        feel: "feel-stiff",
        back: ["back-high","back-medium","back-low","back-none"],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },2999),
    new Mattress("Helix", "Moonlight Elite", {
        sleepside: "sleepside-backstomach",
        feel: "feel-soft",
        back: ["back-high","back-medium","back-low","back-none"],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },2999),
    new Mattress("Helix", "Dusk Elite", {
        sleepside: "sleepside-backstomach",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none"],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },2999),
    new Mattress("Helix", "Dawn Elite", {
        sleepside: "sleepside-side",
        feel: "feel-stiff",
        back: ["back-high","back-medium","back-low","back-none"],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },2999),
    new Mattress("Helix", "Sunset Luxe", {
        sleepside: "sleepside-side",
        feel: "feel-soft",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1919),
    new Mattress("Helix", "Midnight Luxe", {
        sleepside: "sleepside-side",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1919),
    new Mattress("Helix", "Dusk Luxe", {
        sleepside: "sleepside-backstomach",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1919),
    new Mattress("Helix", "Moonlight Luxe", {
        sleepside: "sleepside-backstomach",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1919),
    new Mattress("Helix", "Dawn Luxe", {
        sleepside: "sleepside-backstomach",
        feel: "feel-stiff",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1919),
    new Mattress("Douglas", "Original", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },799),
    new Mattress("Douglas", "Alpine", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },999),
    new Mattress("Douglas", "Alpine", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1299),
    new Mattress("Silk&Snow", "Firm", {
        sleepside: "sleepside-backstomach",
        feel: "feel-",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },700),
    new Mattress("Silk&Snow", "Medium-Firm", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },800),
    new Mattress("Silk&Snow", "Plush", {
        sleepside: "sleepside-all",
        feel: "feel-soft",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },1050),
    new Mattress("Silk&Snow", "Hybrid Firm", {
        sleepside: "sleepside-backstomach",
        feel: "feel-stiff",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-pooe"
    },900),
    new Mattress("Silk&Snow", "Hybrid Medium-Firm", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1000),
    new Mattress("Silk&Snow", "Hybrid Plush", {
        sleepside: "sleepside-all",
        feel: "feel-soft",
        back: ["back-high","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1450),
    new Mattress("Silk&Snow", "Organic Firm", {
        sleepside: "sleepside-backstomach",
        feel: "feel-stiff",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },900),
    new Mattress("Silk&Snow", "Organic Medium-Firm", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1000),
    new Mattress("Silk&Snow", "Organic Plush", {
        sleepside: "sleepside-side",
        feel: "feel-soft",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1450),
    new Mattress("Casper", "Mattress", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1000),
    new Mattress("Casper", "Original Hybrid", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1399),
    new Mattress("Casper", "Wave Hybrid Snow", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },3499),
    new Mattress("Casper", "Dawn", {
        sleepside: "sleepside-all",
        feel: "feel-stiff",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },699),
    new Mattress("Casper", "Atlas Hybrid", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },899),
    new Mattress("Casper", "Snow", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium"],
        money: "money-poor"
    },699),
    new Mattress("Puffy", "LUX", {
        sleepside: "sleepside-side",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium"],
        money: "money-money"
    },1499),
    new Mattress("Puffy", "ROYAL", {
        sleepside: "sleepside-side",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium"],
        money: "money-money"
    },1649),
    new Mattress("Puffy", "CLOUD", {
        sleepside: "sleepside-side",
        feel: "feel-stiff",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium"],
        money: "money-poor"
    },899),
    new Mattress("Logan & Cove", "Choice", {
        sleepside: "sleepside-side",
        feel: "feel-stiff",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium"],
        money: "money-poor"
    },899),
    new Mattress("Logan & Cove", "Choice Hybrid", {
        sleepside: "sleepside-side",
        feel: "feel-stiff",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium"],
        money: "money-poor"
    },899),
    new Mattress("Logan & Cove", "Choice", {
        sleepside: "sleepside-side",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },999),
    new Mattress("Logan & Cove", "Frontier", {
        sleepside: "sleepside-side",
        feel: "feel-soft",
        back: ["back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low"],
        money: "money-money"
    },999),
    new Mattress("Logan & Cove", "Pinnacle", {
        sleepside: "sleepside-side",
        feel: "feel-soft",
        back: ["back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh",],
        money: "money-money"
    },999),
    new Mattress("Endy", "Firm Mattress", {
        sleepside: "sleepside-backstomach",
        feel: "feel-stiff",
        back: ["back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },895),
    new Mattress("Endy", "Medium-Firm", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },895),
    new Mattress("Endy", "Plush", {
        sleepside: "sleepside-side",
        feel: "feel-soft",
        back: ["back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1095),
    new Mattress("Endy", "Hybrid Firm", {
        sleepside: "sleepside-backstomach",
        feel: "feel-stiff",
        back: ["back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1295),
    new Mattress("Endy", "Hybrid Medium-Firm", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1295),
    new Mattress("Endy", "Hybrid Plush", {
        sleepside: "sleepside-side",
        feel: "feel-soft",
        back: ["back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1495),
    new Mattress("Endy", "Kids", {
        sleepside: "sleepside-side",
        feel: "feel-medium",
        back: ["back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },495),
    new Mattress("Simba", "Hybrid 1500", {
        sleepside: "sleepside-backstomach",
        feel: "feel-stiff",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1499),
    new Mattress("Simba", "Hybrid 2500", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },2499),
    new Mattress("Simba", "Hybrid 5000", {
        sleepside: "sleepside-side",
        feel: "feel-soft",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },4999),
    new Mattress("Simba", "Green Hybrid", {
        sleepside: "sleepside-side",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },2499),
    new Mattress("Hush", "Graph-Iced", {
        sleepside: "sleepside-side",
        feel: "feel-soft",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium"],
        money: "money-money"
    },1899),
    new Mattress("GhostBed", "Comfort Foam", {
        sleepside: "sleepside-backstomach",
        feel: "feel-stiff",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium", "temp-low"],
        money: "money-money"
    },999),
    new Mattress("GhostBed", "Signature Foam", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium"],
        money: "money-money"
    },1299),
    new Mattress("GhostBed", "Luxe Foam", {
        sleepside: "sleepside-backstomach",
        feel: "feel-stiff",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh"],
        money: "money-money"
    },2199),
    new Mattress("GhostBed", "Comfort Hybrid", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium", "temp-low"],
        money: "money-money"
    },999),
    new Mattress("GhostBed", "Signature Hybrid", {
        sleepside: "sleepside-backstomach",
        feel: "feel-stiff",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium"],
        money: "money-money"
    },1299),
    new Mattress("GhostBed", "Luxe Hybrid", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-low","back-none",],
        temp: ["temp-always","temp-midhigh"],
        money: "money-money"
    },2199),
    new Mattress("Octave", "Vista", {
        sleepside: "sleepside-backstomach",
        feel: "feel-medium",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh", "temp-medium", "temp-low"],
        money: "money-money"
    },999),
    new Mattress("Octave", "Mirage", {
        sleepside: "sleepside-backstomach",
        feel: "feel-medium",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh", "temp-medium"],
        money: "money-money"
    },1199),
    new Mattress("Octave", "Horizon", {
        sleepside: "sleepside-backstomach",
        feel: "feel-medium",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh"],
        money: "money-money"
    },1199),
    new Mattress("Emma", "Performance", {
        sleepside: "sleepside-side",
        feel: "feel-soft",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh"],
        money: "money-money"
    },1049),
    new Mattress("Emma", "Original", {
        sleepside: "sleepside-backstomach",
        feel: "feel-medium",
        back: ["back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh"],
        money: "money-poor"
    },749),
    new Mattress("Emma", "Original Lite", {
        sleepside: "sleepside-backstomach",
        feel: "feel-medium",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh"],
        money: "money-poor"
    },449),
    new Mattress("Nectar", "Ultra Memory Foam", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1799),
    new Mattress("Nectar", "Classic Hybrid", {
        sleepside: "sleepside-all",
        feel: "feel-stiff",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },799),
    new Mattress("Nectar", "Premier Hybrid", {
        sleepside: "sleepside-side",
        feel: "feel-medium",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1099),
    new Mattress("Nectar", "Luxe Hybrid", {
        sleepside: "sleepside-side",
        feel: "feel-medium",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },1599),
    new Mattress("Nectar", "Ultra Hybrid", {
        sleepside: "sleepside-backstomach",
        feel: "feel-medium",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },2099),
    new Mattress("Nectar", "Classic Memory Foam", {
        sleepside: "sleepside-all",
        feel: "feel-medium",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-poor"
    },649),
    new Mattress("Nectar", "Luxe Memory Foam", {
        sleepside: "sleepside-backstomach",
        feel: "feel-medium",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium"],
        money: "money-money"
    },1249),
    new Mattress("Nectar", "Premier Memory Foam", {
        sleepside: "sleepside-side",
        feel: "feel-firm",
        back: ["back-always","back-medium","back-low","back-none",],
        temp: ["temp-always","temp-midhigh","temp-medium","temp-low","temp-rarely"],
        money: "money-money"
    },949),
])

export { mattressList }