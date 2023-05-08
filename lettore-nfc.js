let nfcContent = null;
const nfc = new NDEFReader();

// Aggiunge un listener per la lettura del tag NFC
nfc.addEventListener('reading', ({ message, serialNumber }) => {
  console.log(`Tag NFC letto con serial number ${serialNumber}`);
  console.log(`Contenuto del tag: ${message.records[0].data}`);
  nfcContent = message.records[0].data;
});

// Avvia la scansione NFC
nfc.scan();

// Crea la funzione per il blocco "contenuto del tag NFC"
function nfc_content() {
  return nfcContent;
}
