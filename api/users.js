let users = [
  { id: "1", name: "Kadar", piID: "PI123", balance: 100 },
];

export async function loginUser(piID) {
  return users.find(u => u.piID === piID) || null;
}

export async function getUserData(id) {
  return users.find(u => u.id === id) || null;
}
