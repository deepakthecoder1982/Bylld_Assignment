// ### Challenge 1: Food Delivery Application Price Calculator

// **Objective**:
//  Create a JavaScript function to calculate the total price for orders in a food delivery application,
// incorporating various conditions and discounts.

// - Based on the Borough: Manhattan - $5, Brooklyn and The Bronx - $6, Queens - $4, Staten Island - $10.
// - Weekday Discount: $2 off.
// - Thursday Discount: $3 off.
function calculateTotalPrice(
  items,
  borough,
  userType,
  dayOfWeek,
  tip,
  promoCode
) {
  // Calculate base prices based on items
  let TotalBill = 0;
  let pizzaPrice = 0;
  const MenuItemsPrice = {
    pizza: { small: 10, medium: 15, large: 20 },
    pasta: 20,
    salad: 15,
  };
  const DeliveryPrice = {
    manhattan: 5,
    brooklyn: 6,
    bronx: 6,
    queens: 4,
    "Staten Island": 10,
  };
  const userTypesPrice = { seniors: 2, students: 1 };


  for (let i = 0; i < items.length; i++) {
    if (
      MenuItemsPrice[items[i].item.toLowerCase()] &&
      items[i].item.toLowerCase() == "pizza"
    ) {
      TotalBill +=
        MenuItemsPrice[items[i].item.toLowerCase()][
          items[i].size.toLowerCase()
        ] * items[i].quantity;

      pizzaPrice += 
        MenuItemsPrice[items[i].item.toLowerCase()][
          items[i].size.toLowerCase()
        ] * items[i].quantity;
    } else if (MenuItemsPrice[items[i].item.toLowerCase()]) {
      TotalBill +=
        MenuItemsPrice[items[i].item.toLowerCase()] * items[i].quantity;
    }
  }

  //   for delivery charges
  let deliverCharges = 0;
  if (DeliveryPrice[borough.toLowerCase()] && promoCode != "FREEDELIVERY") {
    deliverCharges += DeliveryPrice[borough.toLowerCase()];
  }
  if (userTypesPrice[userType.toLowerCase()]) {
    TotalBill -= userTypesPrice[userType.toLowerCase()];
  }

  if (TotalBill) {
    if (dayOfWeek.toLowerCase() === "thursday") {
      TotalBill + -3;
    } else {
      TotalBill -= 2;
    }
  }

  if (tip?.type == "percentage") {
    TotalBill += (tip?.value / 100) * TotalBill;
  } else {
    TotalBill += tip?.value;
  }

  if(promoCode == "30-OFF"){
    TotalBill -= (30/100)*TotalBill;
  }else if (promoCode === "HALF-OFF-PIZZA"){
    pizzaPrice = (50/100)*pizzaPrice;
    TotalBill -= pizzaPrice;
  }else if(promoCode === "FREEDELIVERY"){
    deliverCharges = 0;
  }

  return TotalBill+deliverCharges;

  // Apply discounts and promo codes

  // Calculate and apply tax

  // Calculate total with gratuity

  // Return the final price
}
let totalPrice = calculateTotalPrice(
  [
    { item: "pizza", size: "medium", quantity: 2 },
    { item: "pasta", quantity: 1 },
    { item: "salad", quantity: 1 },
  ],
  "Brooklyn",
  "student",
  "Wednesday",
  { type: "percentage", value: 10 },
  "HALF-OFF-PIZZA"
);
console.log(`Total Price: $${totalPrice}`);
