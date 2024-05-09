type User1 = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User1>): Partial<User1> {
  // Оновлення користувача
  return { ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
