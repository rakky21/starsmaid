import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $lastName: String!
    $password: String!
    $email: String!
    $phone: String!
  ) {
    createUser(
      name: $name
      lastName: $lastName
      password: $password
      email: $email
      phone: $phone
    ) {
      id
      name
      email
      phone
    }
  }
`;

const SignUp = () => {
	const [formState, setFormState] = useState({
		name: "",
		lastName: "",
		password: "",
		email: "",
		phone: "",
	});
	const [createUser] = useMutation(CREATE_USER);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await createUser({ variables: formState });
			console.log("User Created: ", data.createUser);
			alert("Account create! Welcome " + data.createUser.name);
			setFormState({
				name: "",
				lastName: "",
				password: "",
				email: "",
				phone: "",
			});
		} catch (err) {
			console.log(err);
			alert("Error creating account");
		}
	};
	return (
			<form className="signup_form" id="contact" onSubmit={handleFormSubmit}>
				<h2 className="form_title"> SIGN UP</h2>
				<label>Enter name:</label>
				<input
					required
					value={formState.name}
					onChange={handleChange}
					type="text"
					placeholder="Your Name"
					name="name"
				/>
				<label>Enter lastname:</label>
				<input
					required
					value={formState.lastName}
					onChange={handleChange}
					type="text"
					placeholder="Your Lastname"
					name="lastName"
				/>
				<label>Create Password:</label>
				<input
					required
					value={formState.password}
					onChange={handleChange}
					type="text"
					placeholder="Password"
					name="password"
				/>
				<label>Email address:</label>
				<input
					required
					value={formState.email}
					onChange={handleChange}
					type="text"
					placeholder="Email Address"
					name="email"
				/>
				<label> Phone Number:</label>
				<input
					value={formState.phone}
					onChange={handleChange}
					type="number"
					placeholder="Phone Number"
					name="phone"
				/>
				<br />
				<button className="btn" type="submit">
					Submit
				</button>
			</form>
	);
};

export default SignUp;