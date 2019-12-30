import React, { useState } from "react";

import { Text, Alert, Image } from "react-native";

import { Container, Title, Form, Label, Input, Button } from "./styles";

export default function Calculator() {
	const [year, setYear] = useState(0);
	const [km, setKm] = useState(0);

	const calculateKmPerDay = function() {
		if (year < 1900 || km <= 0) {
			Alert.alert("Opss!", "Você precisa preencher os campos corretamente.");
		} else if (Number(year) === new Date().getFullYear()) {
			const getAmountYear = 1;
			const getKmRunningPerYear = km / getAmountYear;
			const getKmRunningPerDay = getKmRunningPerYear / 365; //TODO mudar os dias do ano para dinâmico

			const result = {
				getAmountYear,
				getKmRunningPerYear: Number(getKmRunningPerYear).toFixed(1),
				getKmRunningPerDay: Number(getKmRunningPerDay).toFixed(1)
			};

			return Alert.alert(
				"Resultado",
				`Idade do Veiculo: ${result.getAmountYear} anos \nPercorreu por ano: ${result.getKmRunningPerYear} Km \nPercorreu por dia: ${result.getKmRunningPerDay} Km`
			);
		} else {
			const getAmountYear = new Date().getFullYear() - year;
			const getKmRunningPerYear = km / getAmountYear;
			const getKmRunningPerDay = getKmRunningPerYear / 365; //TODO mudar os dias do ano para dinâmico

			const result = {
				getAmountYear,
				getKmRunningPerYear: Number(getKmRunningPerYear).toFixed(1),
				getKmRunningPerDay: Number(getKmRunningPerDay).toFixed(1)
			};

			return Alert.alert(
				"Resultado",
				`Idade do Veiculo: ${result.getAmountYear} anos \nPercorreu por ano: ${result.getKmRunningPerYear} Km \nPercorreu por dia: ${result.getKmRunningPerDay} Km`
			);
		}
	};

	return (
		<>
			<Container behavior={"height"}>
				<Title>Calcule a média de Km rodados por dia.</Title>
				<Form>
					<Label>Digite o ano do veículo</Label>
					<Input
						selectionColor={"tomato"}
						placeholder={`Ex.: ${new Date().getFullYear() - 2}`}
						keyboardType={"numeric"}
						onChangeText={value => {
							setYear(value);
						}}
					/>

					<Label>Digite a Km atual do veículo</Label>
					<Input
						selectionColor={"tomato"}
						placeholder="Ex.: 90.000"
						keyboardType={"numeric"}
						onChangeText={value => {
							setKm(value);
						}}
					/>

					<Button
						onPress={() => {
							calculateKmPerDay();
						}}
					>
						<Text style={{ color: "#fff" }}>Calcular</Text>
					</Button>
				</Form>
			</Container>
		</>
	);
}
