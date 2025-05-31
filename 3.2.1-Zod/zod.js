const z = require("zod");

const emailSchema = z.string().email("Por favor ingresa un correo valido");
const passwordSchema = z.string().min(8);
const phoneNumberSchema = z.string().length(10);
const objectSchema = z.object({
    username: z.string(),
    age: z.number(),
})

console.log(emailSchema.parse("diegogmail.com"));
console.log(passwordSchema.parse("Dalp1234@"));
console.log(phoneNumberSchema.parse("5523567590"));

console.log(objectSchema.parse({
    username: "Diego",
    age: 21,
}));