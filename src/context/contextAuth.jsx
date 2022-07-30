import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../firebase";
import { useMounted } from "../hooks";

const AuthContext = createContext();

const AuthProvider = ({ children, ...props }) => {
	const [user, setUser] = useState(null);
	useMounted(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
	const context = useContext(AuthContext);

	if (typeof context === "undefined") {
		throw new Error("The useAuth must be used within a AuthProvider");
	}
	return context;
};

export { AuthProvider, useAuth };
