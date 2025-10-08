import React from 'react';
const foodBowls = [{
  id: 1,
  name: 'Mediterranean Delight',
  description: 'Quinoa, hummus, falafel, cucumber, cherry tomatoes, olives with tahini dressing',
  price: '£12.99',
  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 2,
  name: 'Asian Fusion Bowl',
  description: 'Brown rice, edamame, avocado, carrots, cucumber, with sriracha mayo',
  price: '£13.99',
  image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 3,
  name: 'Mexican Fiesta',
  description: 'Black beans, corn, avocado, tomato salsa, lime-cilantro rice, with chipotle dressing',
  price: '£11.99',
  image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
}, {
  id: 4,
  name: 'Power Protein Bowl',
  description: 'Grilled chicken, quinoa, sweet potatoes, broccoli, kale, with lemon-herb dressing',
  price: '£14.99',
  image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
}];
export function FoodBowls() {
  return <section id="food-bowls" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Signature Food Bowls
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Nutritious, delicious, and beautifully crafted food bowls made with
            the freshest ingredients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {foodBowls.map(bowl => <div key={bowl.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={bowl.image} alt={bowl.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {bowl.name}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{bowl.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-emerald-600">
                    {bowl.price}
                  </span>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-md text-sm hover:bg-emerald-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-white text-emerald-600 border border-emerald-600 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition-colors">
            View All Food Bowls
          </button>
        </div>
      </div>
    </section>;
}