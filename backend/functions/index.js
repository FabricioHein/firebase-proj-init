const functions = require("firebase-functions");

const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();
// const admin = require("firebase-admin");
// admin.initializeApp();

exports.addData = functions.https.onRequest(async (req, res) => {
  const original = req.body;

  await db.collection("clientes").add({
    ...original,
  });
  res.json({ result: `Adicionado com sucesso.` });
});

exports.removeData = functions.https.onRequest(async (req, res) => {
  const { id } = req.body;

  const info = await db.collection("clientes").doc(id).delete();

  if (info) return res.json({ result: `Foi atualizado com sucesso` });
});

exports.getData = functions.https.onRequest(async (req, res) => {
  const { id } = req.body;

  const info = await db.collection("clientes").doc(id).get();

  if (info) return res.json(info);
});

exports.getAllDataColections = functions.https.onRequest(async (req, res) => {
  const collection = await db.listCollections();

  return res.json(collection);
});

exports.getInfoCollectionClientes = functions.https.onRequest(
  async (req, res) => {
    const querySnapshot = await db.collection("clientes").get();

    const clientes = await querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return res.json({ clientes });
  }
);

exports.addRestaurantes = functions.https.onRequest(async (req, res) => {
  try {
    const { empresa, email, telefone } = req.body;

    let dataReq = {
      empresa: empresa,
      email: email,
      telefone: telefone,
    };

    const restaurantes = await db.collection("restaurantes").add({
      ...dataReq,
    });
    if (restaurantes) {
      return res.json({ result: `adicionado com sucesso ${restaurantes}` });
    }
    return res.json({ result: `erro ${error}` });
  } catch (error) {
    return res.json({ result: `erro ${error}` });
  }
});

exports.updateRestaurantes = functions.https.onRequest(async (req, res) => {
  try {
    const { id, empresa, email, telefone } = req.body;

    let dataReq = {
      empresa: empresa,
      email: email,
      telefone: telefone,
    };

    const info = await db.collection("restaurantes")
    .doc(id)
    .update({ ...dataReq });

    console.log(info);

    return res.json({result: `atualizado`});
  } catch (error) {
    return res.json({ result: `erro ${error}` });
  }
});
