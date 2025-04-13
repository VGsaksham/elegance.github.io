// Product data for the Elegance website
const products = {
    "tote1": {
        title: "Classic Leather Tote",
        category: "Handbags",
        price: "$295.00",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1614179818511-45025292cdb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        ],
        description: "Our signature tote combines timeless design with exceptional functionality. Handcrafted from premium full-grain leather, this versatile bag features a spacious interior that easily accommodates your daily essentials.",
        features: "Includes an interior zip pocket, two slip pockets, and a detachable leather pouch. The bag closes with a magnetic snap for security while maintaining easy access to your belongings.",
        details: {
            material: "Full-grain Italian leather",
            dimensions: "14\"L x 5.5\"W x 13\"H, 9\" handle drop",
            color: "Cognac Brown",
            madeIn: "Italy"
        }
    },
    "heels1": {
        title: "Stiletto Evening Heels",
        category: "Shoes",
        price: "$245.00",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80",
            "https://images.unsplash.com/photo-1581101767113-7b6e54c1b1c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
        ],
        description: "Elevate any evening ensemble with our sophisticated stiletto heels. Designed with both elegance and comfort in mind, these shoes feature a slender 4-inch heel and a cushioned insole for extended wear.",
        features: "The pointed toe and sleek silhouette create a timeless look, while the padded footbed and balanced design ensure comfort throughout the night.",
        details: {
            material: "Suede upper, leather lining, leather sole",
            dimensions: "4\" heel height",
            color: "Black",
            madeIn: "Spain"
        }
    },
    "crossbody1": {
        title: "Minimalist Crossbody",
        category: "Handbags",
        price: "$185.00",
        image: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        ],
        description: "Our minimalist crossbody bag embodies the essence of modern simplicity. The clean lines and understated design make it a versatile accessory for both casual and formal occasions.",
        features: "Features an adjustable strap, allowing you to wear it as a crossbody or shoulder bag. The interior includes card slots and a zippered pocket for organization.",
        details: {
            material: "Smooth calfskin leather",
            dimensions: "8\"L x 2\"W x 6\"H, adjustable strap",
            color: "Ivory",
            madeIn: "Italy"
        }
    },
    "oxford1": {
        title: "Classic Oxford Shoes",
        category: "Shoes",
        price: "$275.00",
        image: "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        ],
        description: "Our classic Oxford shoes represent the pinnacle of traditional craftsmanship. Each pair is meticulously constructed using the finest materials and time-honored techniques.",
        features: "Features include a Goodyear welted construction for durability, a leather lining for comfort, and a slightly cushioned insole. The leather sole is finished with a rubber heel for traction.",
        details: {
            material: "Full-grain calfskin leather",
            dimensions: "1\" heel height",
            color: "Dark Brown",
            madeIn: "England"
        }
    },
    "clutch1": {
        title: "Evening Clutch",
        category: "Handbags",
        price: "$165.00",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        ],
        description: "Our elegant evening clutch adds a touch of sophistication to any formal outfit. The sleek design and minimalist hardware create a timeless accessory that complements rather than competes with your ensemble.",
        features: "Includes a detachable chain strap, allowing you to carry it as a clutch or wear it over the shoulder. The interior features card slots and a small pocket for essentials.",
        details: {
            material: "Satin with leather trim",
            dimensions: "10\"L x 1.5\"W x 5\"H",
            color: "Black",
            madeIn: "Italy"
        }
    },
    "sneakers1": {
        title: "Minimalist Sneakers",
        category: "Shoes",
        price: "$195.00",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
            "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        ],
        description: "Our minimalist sneakers blend casual comfort with refined style. The clean design and premium materials elevate this everyday essential to a statement of understated luxury.",
        features: "Features include a cushioned insole for all-day comfort, a durable rubber outsole, and waxed cotton laces. The breathable leather lining ensures comfort in all seasons.",
        details: {
            material: "Premium leather upper, rubber sole",
            dimensions: "1\" sole height",
            color: "White",
            madeIn: "Portugal"
        }
    },
    "backpack1": {
        title: "Leather Backpack",
        category: "Handbags",
        price: "$325.00",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            "https://images.unsplash.com/photo-1622560481016-7b70b4f2b3f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        ],
        description: "Our leather backpack combines functionality with sophisticated style. Perfect for the modern professional, it offers ample storage while maintaining a sleek, structured silhouette.",
        features: "Features include adjustable shoulder straps, a top handle, multiple interior compartments, and a padded laptop sleeve that fits up to a 15-inch laptop. The exterior pocket provides quick access to essentials.",
        details: {
            material: "Full-grain leather with cotton lining",
            dimensions: "12\"L x 5\"W x 16\"H",
            color: "Black",
            madeIn: "Italy"
        }
    },
    "boots1": {
        title: "Leather Ankle Boots",
        category: "Shoes",
        price: "$285.00",
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
            "https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            "https://images.unsplash.com/photo-1605812860427-4024433a70fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        ],
        description: "Our leather ankle boots offer versatile style with exceptional comfort. The classic silhouette pairs effortlessly with both casual and formal attire, making them a wardrobe essential.",
        features: "Features include a side zipper for easy on and off, a cushioned insole for all-day comfort, and a durable rubber sole for traction. The leather is treated for water resistance.",
        details: {
            material: "Full-grain leather, leather lining, rubber sole",
            dimensions: "2\" heel height",
            color: "Chestnut Brown",
            madeIn: "Spain"
        }
    },
    "shoulder1": {
        title: "Structured Shoulder Bag",
        category: "Handbags",
        price: "$255.00",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        thumbnails: [
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
        ],
        description: "Our structured shoulder bag makes a bold architectural statement while maintaining practical functionality. The geometric design and clean lines create a modern accessory that elevates any outfit.",
        features: "Features include an adjustable shoulder strap, magnetic closure, and multiple interior compartments for organization. The bag stands on its own thanks to the structured base.",
        details: {
            material: "Smooth calfskin leather with suede lining",
            dimensions: "9\"L x 3\"W x 7\"H, 22\" strap drop",
            color: "Navy Blue",
            madeIn: "Italy"
        }
    }
}; 