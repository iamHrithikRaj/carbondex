export function calculate(state, area, area_pert, electricity) {
  let budget_additionally = "";

  //   var state = $("#state").val();
  //   var state_name = $("#state option:selected").text();
  //   var customer_type = $("#customer_type").val();
  let category = get_state_category(state);

  let checkbox_selected = "Roof Top Area";
  let plant_size = calculate_plant_size_area();
  if (plant_size > 500) {
    document.alert("plant size limit exceeded");
  }

  let cost1 = get_benchmark(plant_size, category);
  let output_without_subsidy = plant_size * cost1;
  output_without_subsidy = Number(output_without_subsidy).toFixed(0);

  //====
  let irradiation = get_irradiation(state);
  let generate = irradiation * 0.0036 * 1.1;
  generate = Number(generate).toFixed(1);
  let output_electricity_annual = generate * plant_size * 300;
  output_electricity_annual = Number(output_electricity_annual).toFixed(0);
  let output_electricity_lifetime = output_electricity_annual * 25;
  //---

  //====CO2 and tree====
  let value_a = output_electricity_lifetime * 0.82;
  let value_b = 25 * 25;
  let co2 = value_a / 1000;
  co2 = Number(co2).toFixed(0);
  let tree = value_a / value_b;
  tree = Number(tree).toFixed(0);
  //-----

  //===========
  let output_electricity_unit = electricity;
  let output_saving_annually =
    output_electricity_annual * output_electricity_unit;
  let output_saving_monthly =
    (output_electricity_annual / 12) * output_electricity_unit;
  output_saving_monthly = Number(output_saving_monthly).toFixed(0);
  let output_saving_lifetime = output_saving_annually * 25;
  //----------
}

export function calculate_plant_size_area(roof_area, roof_area_percentage) {
  let capacity = (roof_area * roof_area_percentage) / 1000;
  //capacity = Number(capacity).toFixed(0); //modified on 31Jan2018
  capacity = Number(capacity).toFixed(1);
  return capacity;
}

export const data = [
  { category: "G", rangeFrom: "1", rangeTo: "1", cost: "47" },
  { category: "I", rangeFrom: "1", rangeTo: "1", cost: "52" },
  { category: "N", rangeFrom: "1", rangeTo: "1", cost: "52" },
  { category: "S", rangeFrom: "1", rangeTo: "1", cost: "52" },
  { category: "G", rangeFrom: "1", rangeTo: "2", cost: "43" },
  { category: "I", rangeFrom: "1", rangeTo: "2", cost: "47" },
  { category: "N", rangeFrom: "1", rangeTo: "2", cost: "47" },
  { category: "S", rangeFrom: "1", rangeTo: "2", cost: "47" },
  { category: "G", rangeFrom: "2", rangeTo: "3", cost: "42" },
  { category: "I", rangeFrom: "2", rangeTo: "3", cost: "46" },
  { category: "N", rangeFrom: "2", rangeTo: "3", cost: "46" },
  { category: "S", rangeFrom: "2", rangeTo: "3", cost: "46" },
  { category: "G", rangeFrom: "3", rangeTo: "10", cost: "41" },
  { category: "I", rangeFrom: "3", rangeTo: "10", cost: "45" },
  { category: "N", rangeFrom: "3", rangeTo: "10", cost: "45" },
  { category: "S", rangeFrom: "3", rangeTo: "10", cost: "45" },
  { category: "G", rangeFrom: "10", rangeTo: "100", cost: "38" },
  { category: "I", rangeFrom: "10", rangeTo: "100", cost: "42" },
  { category: "N", rangeFrom: "10", rangeTo: "100", cost: "42" },
  { category: "S", rangeFrom: "10", rangeTo: "100", cost: "42" },
  { category: "G", rangeFrom: "100", rangeTo: "500", cost: "36" },
  { category: "I", rangeFrom: "100", rangeTo: "500", cost: "40" },
  { category: "N", rangeFrom: "100", rangeTo: "500", cost: "40" },
  { category: "S", rangeFrom: "100", rangeTo: "500", cost: "40" },
];

export function get_benchmark(plant_size, category) {
  plant_size = parseInt(plant_size);
  let benchmark = 0;
  for (let i = 0; i < data.length; i++) {
    if (plant_size === 1) {
      if (data[i].category === category && plant_size === data[i].rangeTo) {
        let cost = data[i].cost;
        benchmark = cost * 1000;
      }
    } else {
      if (
        data[i].category === category &&
        plant_size > data[i].rangeFrom &&
        plant_size <= data[i].rangeTo
      ) {
        let cost = data[i].cost;
        benchmark = cost * 1000;
      }
    }
  }

  benchmark = Number(benchmark).toFixed(0);
  return benchmark;
}

export const data_state_catg = [
  { state: "1", category: "S" },
  { state: "2", category: "S" },
  { state: "3", category: "G" },
  { state: "4", category: "G" },
  { state: "5", category: "S" },
  { state: "6", category: "G" },
  { state: "7", category: "G" },
  { state: "8", category: "G" },
  { state: "9", category: "G" },
  { state: "10", category: "G" },
  { state: "11", category: "N" },
  { state: "12", category: "N" },
  { state: "13", category: "N" },
  { state: "14", category: "N" },
  { state: "15", category: "N" },
  { state: "16", category: "N" },
  { state: "17", category: "N" },
  { state: "18", category: "N" },
  { state: "19", category: "G" },
  { state: "20", category: "G" },
  { state: "21", category: "G" },
  { state: "22", category: "G" },
  { state: "23", category: "G" },
  { state: "24", category: "G" },
  { state: "27", category: "G" },
  { state: "28", category: "G" },
  { state: "29", category: "G" },
  { state: "30", category: "G" },
  { state: "31", category: "I" },
  { state: "32", category: "G" },
  { state: "33", category: "G" },
  { state: "34", category: "G" },
  { state: "35", category: "I" },
  { state: "36", category: "G" },
  { state: "37", category: "G" },
  { state: "38", category: "G" },
];

export function get_state_category(state) {
  let category = "";
  for (let i = 0; i < data_state_catg.length; i++) {
    if (data_state_catg[i].state === state) {
      category = data_state_catg[i].category;
    }
  }
  return category;
}

export const data_irradiation = [
  { state: "1", irradiation: "1046.26" },
  { state: "2", irradiation: "1046.26" },
  { state: "3", irradiation: "1156.39" },
  { state: "4", irradiation: "1156.39" },
  { state: "5", irradiation: "1046.26" },
  { state: "6", irradiation: "1156.39" },
  { state: "7", irradiation: "1156.39" },
  { state: "8", irradiation: "1266.52" },
  { state: "9", irradiation: "1156.39" },
  { state: "10", irradiation: "1156.39" },
  { state: "11", irradiation: "1046.26" },
  { state: "12", irradiation: "1046.26" },
  { state: "13", irradiation: "1046.26" },
  { state: "14", irradiation: "1046.26" },
  { state: "15", irradiation: "1046.26" },
  { state: "16", irradiation: "1046.26" },
  { state: "17", irradiation: "1046.26" },
  { state: "18", irradiation: "1046.26" },
  { state: "19", irradiation: "1156.39" },
  { state: "20", irradiation: "1156.39" },
  { state: "21", irradiation: "1156.39" },
  { state: "22", irradiation: "1266.52" },
  { state: "23", irradiation: "1266.52" },
  { state: "24", irradiation: "1266.52" },
  { state: "25", irradiation: "1266.52" },
  { state: "26", irradiation: "1266.52" },
  { state: "27", irradiation: "1266.52" },
  { state: "28", irradiation: "1266.52" },
  { state: "29", irradiation: "1266.52" },
  { state: "30", irradiation: "1266.52" },
  { state: "31", irradiation: "1266.52" },
  { state: "32", irradiation: "1266.52" },
  { state: "33", irradiation: "1266.52" },
  { state: "34", irradiation: "1266.52" },
  { state: "35", irradiation: "1156.39" },
  { state: "36", irradiation: "1266.52" },
];

export function get_irradiation(state) {
  let irradiation = "";
  for (let i = 0; i < data_irradiation.length; i++) {
    if (data_irradiation[i].state === state) {
      irradiation = data_irradiation[i].irradiation;
    }
  }
  return irradiation;
}
