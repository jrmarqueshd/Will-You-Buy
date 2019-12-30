import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
	background-color: tomato;
	align-items: center;
	justify-content: center;
	height: 100%;
	padding: 15px 30px;
`;

export const Form = styled.View`
	background-color: #e1e1e1;
	border-radius: 5;
	padding: 15px 25px;
	width: 100%;
`;

export const Title = styled.Text`
	color: #fff;
	font-size: 25;
	text-align: center;
	margin-bottom: 15;
`;

export const Label = styled.Text`
	margin-top: 10;
	font-weight: 100;
`;

export const Input = styled.TextInput`
	background-color: #fff;
	border: 1px solid #fff;
	border-radius: 5;
	margin: 5px 0;
	padding: 5px 10px;
	width: 100%;
`;

export const Button = styled.TouchableOpacity`
	background-color: tomato;
	border-radius: 5;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	padding: 10px;
`;
