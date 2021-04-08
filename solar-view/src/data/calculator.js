// function calculate() {
//   budget_additionally = "";

// //   var state = $("#state").val();
// //   var state_name = $("#state option:selected").text();
// //   var customer_type = $("#customer_type").val();
//   var category = get_state_category(state);

//   checkbox_selected = "Roof Top Area";
//   plant_size = calculate_plant_size_area();
//   if (plant_size > 500) {
//     message =
//       "As per Roof Top Area ,capacity found is beyond 500kW. Maximum limit of capacity is 500kW";
//     new Messi(message, {
//       title: "Error",
//       titleClass: "anim error",
//       modal: true,
//       buttons: [{ id: 0, label: "Ok", val: "X" }],
//     });
//     return false;
//   }

//   var cost1 = get_benchmark(plant_size, category);
//   output_without_subsidy = plant_size * cost1;
//   output_without_subsidy = Number(output_without_subsidy).toFixed(0);

//   //====
//   irradiation = get_irradiation(state);
//   generate = irradiation * 0.0036 * 1.1;
//   generate = Number(generate).toFixed(1);
//   output_electricity_annual = generate * plant_size * 300;
//   output_electricity_annual = Number(output_electricity_annual).toFixed(0);
//   output_electricity_lifetime = output_electricity_annual * 25;
//   //---

//   //====CO2 and tree====
//   value_a = output_electricity_lifetime * 0.82;
//   value_b = 25 * 25;
//   co2 = value_a / 1000;
//   co2 = Number(co2).toFixed(0);
//   tree = value_a / value_b;
//   tree = Number(tree).toFixed(0);
//   //-----

//   //===========
//   output_electricity_unit = $("#electricity_txt").val();
//   output_saving_annually = output_electricity_annual * output_electricity_unit;
//   output_saving_monthly =
//     (output_electricity_annual / 12) * output_electricity_unit;
//   output_saving_monthly = Number(output_saving_monthly).toFixed(0);
//   output_saving_lifetime = output_saving_annually * 25;
//   //----------

//   $(".output").html("");
//   $("#output_state").html(state_name);
//   $("#output_irradiation").html(irradiation);
//   $("#output_generate").html(generate);

//   $("#output_choosen").html(checkbox_selected); //1
//   $("#output_budget_additionally").html(budget_additionally); //1

//   $("#output_size").html(plant_size); //2
//   $("#bench_cost").html(benchmark); //2
//   $("#output_without_subsidy").html(output_without_subsidy); //3
//   $("#output_subsidy_heading").html(subsidy_for_heading); //4 //subsidy - old
//   $("#output_subsidy").html(output_subsidy); //5
//   $("#output_electricity_annual").html(output_electricity_annual); //6
//   $("#output_electricity_lifetime").html(output_electricity_lifetime); //7
//   $("#output_electricity_unit").html(output_electricity_unit); //8
//   $("#output_saving_monthly").html(output_saving_monthly); //9
//   $("#output_saving_annually").html(output_saving_annually); //10
//   $("#output_saving_lifetime").html(output_saving_lifetime); //11

//   $("#output_co2").html(co2);
//   $("#output_tree").html(tree);
// }

// function calculate_plant_size_area() {
//   roof_area_txt = $("#roof_area_txt").val();
//   radio_gp = $('input[name="radio_gp"]:checked').val();
//   if (radio_gp == "1") {
//     roof_area = 0.092903 * roof_area_txt;
//   } else {
//     roof_area = roof_area_txt;
//   }

//   roof_area_percentage = $("#roof_area_percentage_txt").val();
//   capacity = (roof_area * roof_area_percentage) / 1000;
//   //capacity = Number(capacity).toFixed(0); //modified on 31Jan2018
//   capacity = Number(capacity).toFixed(1);
//   return capacity;
// }

// function get_benchmark(plant_size, category) {
//   var plant_size = parseInt(plant_size);
//   benchmark = 0;
//   for (i = 0; i < data.length; i++) {
//     if (plant_size == 1) {
//       if (data[i].category == category && plant_size == data[i].rangeTo) {
//         cost = data[i].cost;
//         benchmark = cost * 1000;
//       }
//     } else {
//       if (
//         data[i].category == category &&
//         plant_size > data[i].rangeFrom &&
//         plant_size <= data[i].rangeTo
//       ) {
//         cost = data[i].cost;
//         benchmark = cost * 1000;
//       }
//     }
//   }

//   benchmark = Number(benchmark).toFixed(0);
//   return benchmark;
// }

// const data_state_catg = [
//   { 1: "S" },
//   { 2: "S" },
//   { 3: "G" },
//   { 4: "G" },
//   { 5: "S" },
//   { 6: "G" },
//   { 7: "G" },
//   { 8: "G" },
//   { 9: "G" },
//   { 10: "G" },
//   { 11: "N" },
//   { 12: "N" },
//   { 13: "N" },
//   { 14: "N" },
//   { 15: "N" },
//   { 16: "N" },
//   { 17: "N" },
//   { 18: "N" },
//   { 19: "G" },
//   { 20: "G" },
//   { 21: "G" },
//   { 22: "G" },
//   { 23: "G" },
//   { 24: "G" },
//   { 27: "G" },
//   { 28: "G" },
//   { 29: "G" },
//   { 30: "G" },
//   { 31: "I" },
//   { 32: "G" },
//   { 33: "G" },
//   { 34: "G" },
//   { 35: "I" },
//   { 36: "G" },
//   { 37: "G" },
//   { 38: "G" },
// ];

// function get_state_category(state) {
//   for (let i = 0; i < data_state_catg.length; i++) {
//     if (data_state_catg[i].state == state) {
//       category = data_state_catg[i].category;
//     }
//   }

//   return category;
// }

// const data_irradiation = [
//   { 1: "1046.26" },
//   { 2: "1046.26" },
//   { 3: "1156.39" },
//   { 4: "1156.39" },
//   { 5: "1046.26" },
//   { 6: "1156.39" },
//   { 7: "1156.39" },
//   { 8: "1266.52" },
//   { 9: "1156.39" },
//   { 10: "1156.39" },
//   { 11: "1046.26" },
//   { 12: "1046.26" },
//   { 13: "1046.26" },
//   { 14: "1046.26" },
//   { 15: "1046.26" },
//   { 16: "1046.26" },
//   { 17: "1046.26" },
//   { 18: "1046.26" },
//   { 19: "1156.39" },
//   { 20: "1156.39" },
//   { 21: "1156.39" },
//   { 22: "1266.52" },
//   { 23: "1266.52" },
//   { 24: "1266.52" },
//   { 25: "1266.52" },
//   { 26: "1266.52" },
//   { 27: "1266.52" },
//   { 28: "1266.52" },
//   { 29: "1266.52" },
//   { 30: "1266.52" },
//   { 31: "1266.52" },
//   { 32: "1266.52" },
//   { 33: "1266.52" },
//   { 34: "1266.52" },
//   { 35: "1156.39" },
//   { 36: "1266.52" },
// ];

// function get_irradiation(state) {
//   for (i = 0; i < data_irradiation.length; i++) {
//     if (data_irradiation[i].state == state) {
//       irradiation = data_irradiation[i].irradiation;
//     }
//   }

//   return irradiation;
// }
