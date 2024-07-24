// let order = (timeout) => {
//   setTimeout(() => {
//     console.log("Primer Paso");
//     setTimeout(() => {
//       console.log("Segundo Paso");
//       setTimeout(() => {
//         console.log("Tercer Paso");
//       }, timeout);
//     }, timeout);
//   }, timeout);
// };

// order(1000);

// let orderPromise = (timeout, callback) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(callback());
//     }, timeout);
//   });
// };

// PrimerPaso = () => console.log("PrimerPaso");
// SegundoPaso = () => console.log("SegundoPaso");
// TercerPaso = () => console.log("TercerPaso");

// orderPromise(1000, PrimerPaso)
//   .then(orderPromise(1000, SegundoPaso))
//   .then(orderPromise(1000, TercerPaso));

PrimerPaso = () => {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, 3000, "Primer Paso")
  );
};
SegundoPaso = () => {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, "Segundo Paso")
  );
};
TercerPaso = () => {
  return new Promise((resolve, reject) =>
    setTimeout(resolve, 1000, "Tercer Paso")
  );
};

async function Pasos() {
  const first = await PrimerPaso().then((val) => console.log(val));
  const second = await SegundoPaso().then((val) => console.log(val));
  const third = await TercerPaso().then((val) => console.log(val));
  Promise.all([first, second, third]);
}
Pasos();
