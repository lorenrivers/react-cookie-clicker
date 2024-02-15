// export default function PurchaseCard () {
//     return (
//         <div>
//             <p>{grandmaPurchases} Grandmas</p>
//         </div>
//     )
// }

export function updatePurchases(id) {
  switch (id) {
    case 1:
      setGrandmaPurchases(grandmaPurchases + 1);
  }
  switch (id) {
    case 2:
      setOvenPurchases(ovenPurchases + 1);
  }
  switch (id) {
    case 3:
      setFactoryPurchases(factoryPurchases + 1);
  }
  switch (id) {
    case 4:
      setMinePurchases(minePurchases + 1);
  }
  switch (id) {
    case 5:
      setBankPurchases(bankPurchases + 1);
  }
}
