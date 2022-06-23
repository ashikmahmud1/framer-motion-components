import RadioButtonGroup from "./RadioButtonGroup"

const coffeeOptions = [
    { name: "Cafe Latte", value: "late" },
    { name: "Americano", value: "americano", default: true },
    { name: "Machiato", value: "machiato" }
  ];

const RadioButtonGroupDemo = () => {

    const onChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <RadioButtonGroup onChange={onChange} options={coffeeOptions} name="coffee"/>
    )
}

export default RadioButtonGroupDemo;