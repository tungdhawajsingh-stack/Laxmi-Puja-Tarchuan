
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");

initializeApp();

exports.createUser = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Login required.");
  }

  const caller = await getAuth().getUser(request.auth.uid);
  if (caller.customClaims?.role !== "admin") {
    throw new HttpsError("permission-denied", "Admin only.");
  }

  const { email, password, area } = request.data || {};
  const allowedAreas = [
    "पुरवारी टोला",
    "पच्छियारी टोला",
    "दक्षिण टोला",
    "बिचला टोला",
    "मोती टोला",
    "पाहनटोली"
  ];

  if (!email || !password || password.length < 8 || !allowedAreas.includes(area)) {
    throw new HttpsError("invalid-argument", "Valid email, password (8+ characters), and area required.");
  }

  const user = await getAuth().createUser({ email, password });
  await getAuth().setCustomUserClaims(user.uid, { role: "user", area });
  return { uid: user.uid, message: "User created." };
});
