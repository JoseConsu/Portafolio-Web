// ═══════════════════════════════════════════════════════════════════
// SIMULADOR PARCIAL 02 - Algoritmos de Ordenamiento
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// DATOS DE ARREGLOS - REEMPLAZAR DESPUÉS DEL PROFESOR
// ═══════════════════════════════════════════════════════════════════
const DATOS_PARCIAL_02 = {
  punto01: {
    arregloA: [7234, 1456, 9087, 3421, 5678, 8901, 2345, 6789, 4012, 9876, 1234, 5432, 8765, 3210, 6543, 9012, 2109, 7890, 4567, 8234, 1098, 5876, 3654, 9234, 2987, 6321, 8109, 4789, 7456, 1987, 5234, 9654, 3087, 6876, 2456, 8543, 4321, 7098, 1654, 5987, 9321, 3456, 8012, 2678, 6109, 9543, 4876, 7234, 1432, 5109, 8876, 3789, 6234, 9109, 2543, 7654, 4209, 8456, 1876, 5321, 9876, 3012, 6678, 2234, 7987, 4543, 8321, 1209, 5678, 9234, 3543, 6987, 2876, 8109, 4654, 7321, 1543, 5876, 9012, 3234, 6456, 2109, 8654, 4987, 7109, 1876, 5234, 9456, 3678, 6321, 2654, 8987, 4234, 7543, 1321, 5654, 9678, 3109, 6543, 2987, 8234, 4456, 7876, 1654, 5987, 9321, 3876, 6109, 2456, 8678, 4109, 7234, 1987, 5456, 9876, 3321, 6654, 2109, 8543, 4678, 7456, 1234, 5678, 9109, 3654, 6876, 2321, 8876, 4543, 7678, 1456, 5987, 9234, 3456, 6234, 2678, 8109, 4876, 7321, 1678, 5234, 9654, 3987, 6456, 2876, 8321, 4234, 7109, 1876, 5456, 9012, 3678, 6987, 2543, 8654, 4321, 7876, 1234, 5876, 9456, 3234, 6678, 2109, 8987, 4654, 7543, 1987, 5321, 9678, 3456, 6234, 2876, 8456, 4109, 7654, 1543, 5678, 9876, 3109, 6543, 2321, 8234, 4987, 7234, 1654, 5987, 9321, 3678, 6876, 2456, 8678, 4543, 7456, 1876, 5234, 9109, 3876, 6321, 2654, 8543, 4678, 7987, 1321, 5456, 9234, 3543, 6109, 2987, 8876, 4234, 7678, 1456, 5678, 9654, 3321, 6654, 2234, 8321, 4876, 7109, 1678, 5987, 9012, 3654, 6456, 2543, 8109, 4321, 7876, 1234, 5876, 9456, 3234, 6987, 2678, 8654, 4543, 7321],
    arregloB: ["Sebastián", "Valeria", "Mateo", "Isabella", "Leonardo", "Daniela", "Emilio", "Gabriela", "Nicolás", "Renata", "Benjamín", "Jimena", "Santiago", "Adriana", "Rodrigo", "Fernanda", "Maximiliano", "Carolina", "Tomás", "Mónica", "Felipe", "Alejandra", "Ignacio", "Mariana", "Esteban", "Silvia", "Ángel", "Teresa", "Hugo", "Rosa", "Ramón", "Pilar", "Arturo", "Gloria", "Gustavo", "Rocío", "Enrique", "Amparo", "Roberto", "Dolores", "Alfredo", "Mercedes", "Eduardo", "Inés", "Lorenzo", "Concepción", "Martín", "Estrella", "Armando", "Luz", "Julio", "Francisca", "Agustín", "Antonia", "Rafael", "Remedios", "César", "Encarnación", "Vicente", "Josefa", "Ernesto gustavo", "Blanca", "Jaime", "Ángeles", "Héctor", "Trinidad", "Mauricio", "Dolores", "Germán", "Rosario", "Salvador", "Consuelo", "Tomás", "Soledad", "Alonso", "Asunción", "Julián", "Milagros", "Bruno", "Esperanza", "Marcos", "Paz", "Damián", "Fe", "Emiliano", "Caridad", "Matías", "Purificación", "Fabián", "Nieves", "Orlando", "Angustias", "Patricio", "Socorro", "Ezequiel", "Virtudes", "Simón", "Visitación", "Baltasar", "Rosalía", "Leandro", "Araceli", "Octavio", "Nuria", "Luciano", "Montserrat", "Silvio", "Begoña", "Eugenio", "Inmaculada", "Claudio", "Guadalupe", "Horacio", "Piedad", "Valentín", "Amparo", "Lisandro", "Azucena", "Celso", "Jacinta", "Dante", "Lorena", "Gaspar", "Miriam", "Urbano", "Rebeca", "Feliciano", "Raquel", "Zacarías", "Judith", "Bautista", "Lidia", "Dámaso", "Noemi", "Elías", "Débora", "Isaías", "Esther", "Jonás", "Ruth", "Melchor", "Abigail", "Salomón", "Raquel", "Tobías", "Susana", "Abdón", "Leticia", "Acisclo", "Gema", "Abelardo", "Elisa", "Adán", "Diana", "Adolfo", "Alicia", "Albino", "Cecilia", "Alcides", "Silvia", "Amadeo", "Olga", "Ambrosio", "Irene", "Amílcar", "Paloma", "Anastasio", "Celia", "Anselmo", "Sonia", "Apolinar", "Yolanda", "Aquiles", "Elvira", "Arcadio", "Angélica", "Ariel", "Bárbara", "Catalina", "Arnaldo", "Clotilde", "Arsenio", "Magdalena", "Atanasio", "Aurelia", "Augusto", "Hortensia", "Aureliano", "Flora", "Bartolomé", "Delia", "Basilio", "Eugenia", "Belisario", "Fabiola", "Benedicto", "Felisa", "Bernabé", "Filomena", "Blas", "Herminia", "Bonifacio", "Josefina", "Calixto", "Leocadia", "Casimiro", "Leonor", "Cayetano", "Luisa", "Celestino", "Matilde", "Cipriano", "Micaela", "Cirilo", "Petra", "Clemente", "Ramona", "Constantino", "Regina", "Cornelio", "Salomé", "Cosme", "Saturnina", "Crisanto", "Severina", "Crisóstomo", "Teófila", "Cristóbal", "Tomasa"]
  },
  punto02: { 
    arregloA: [1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104, 1063, 1093, 1112, 1108, 1115, 1110, 1109, 1118, 1107, 1120, 1113, 1111, 1125, 1114, 1122, 1117, 1128, 1119, 1130, 1121, 1126, 1124, 1135, 1123, 1133, 1129, 1138, 1127, 1140, 1132, 1143, 1131, 1145, 1134, 1148, 1136, 1150, 1137, 1152, 1139, 1155, 1141, 1157, 1142, 1160, 1144, 1162, 1146, 1165, 1147, 1167, 1149, 1170, 1151, 1172, 1153, 1175, 1154, 1177, 1156, 1180, 1158, 1182, 1159, 1185, 1161, 1187, 1163, 1190, 1164, 1192, 1166, 1195, 1168, 1197, 1169, 1200, 1171, 1202, 1173, 1205, 1174, 1207, 1176, 1210, 1178, 1212, 1179, 1215, 1181, 1217, 1183, 1220, 1184, 1222, 1186, 1225, 1188, 1227, 1189, 1230, 1191, 1232, 1193, 1235, 1194, 1237, 1196, 1240, 1198, 1242, 1199, 1245, 1201, 1247, 1203, 1250, 1204, 1252, 1206, 1255, 1208, 1257, 1209, 1260, 1211, 1262, 1213, 1265, 1214, 1267, 1216, 1270, 1218, 1272, 1219, 1275, 1221, 1277, 1223, 1280, 1224, 1282, 1226, 1285, 1228, 1287, 1229, 1290, 1231, 1292, 1233, 1295, 1234, 1297, 1236, 1300],
    arregloB: ["Juan", "Zacarías", "María", "Yolanda", "Carlos", "Ximena", "Ana", "Wanda", "Pedro", "Violeta", "Sofía", "Verónica", "Luis", "Úrsula", "Laura", "Tamara", "Diego", "Susana", "Marta", "Sandra", "Miguel", "Rocío", "Elena", "Raquel", "Javier", "Pilar", "Lucía", "Olga", "Pablo", "Nuria", "Valentina", "Natalia", "Andrés", "Mónica", "Camila", "Miriam", "José", "Mariana", "Andrea", "Lorena", "Daniel", "Lidia", "Beatriz", "Julia", "Alejandro", "Isabel", "Sara", "Helena", "Manuel", "Gloria", "Isabel", "Francisca", "Sergio", "Esther", "Julia", "Elena", "Jorge", "Dolores", "Victoria", "Cristina", "Raúl", "Carmen", "Natalia", "Blanca", "Iván", "Beatriz", "Carmen", "Aurora", "Francisco", "Antonia", "Alba", "Ángela", "Rubén", "Alicia", "Elena", "Adriana", "Alberto", "Alba", "Sara", "Almudena", "Adrián", "Ana", "María", "Andrea", "Sergio", "Angela", "Andrea", "Begoña", "Pablo", "Carla", "Lucía", "Carolina", "Luis", "Cecilia", "Paula", "Clara", "Guillermo", "Claudia", "Marta", "Cristina", "Javier", "Daniela", "Laura", "Diana", "Raúl", "Elena", "Clara", "Elvira", "Ángel", "Emilia", "Noelia", "Eva", "Gabriel", "Fernanda", "Cristina", "Flora", "Jesús", "Gabriela", "Martina", "Inés", "Fernando", "Irene", "Carmen", "Jimena", "Víctor", "Laura", "Patricia", "Lucía", "Ricardo", "María", "Andrea", "Marina", "Gonzalo", "Marta", "María", "Mónica", "Óscar", "Natalia", "Sara", "Nerea", "Rubén", "Noelia", "Julia", "Olga", "Samuel", "Paula", "Sofía", "Patricia", "Francisco", "Pilar", "Marta", "Raquel", "Diego", "Rosa", "Andrea", "Rosario", "Juan", "Sandra", "Laura", "Sara", "Javier", "Silvia", "Clara", "Sofía", "José", "Susana", "Elena", "Teresa", "Mario", "Valeria", "Natalia", "Verónica", "Marcos", "Victoria", "Paula", "Yolanda", "Adrián", "Zoraida", "Marina", "Zulema", "Carlos", "Cristina", "Alberto", "Isabel"]
  },
  punto03: { 
    arregloA: [9999, 9987, 9976, 9965, 9954, 9943, 9932, 9921, 9910, 9899, 9888, 9877, 9866, 9855, 9844, 9833, 9822, 9811, 9800, 9789, 9778, 9767, 9756, 9745, 9734, 9723, 9712, 9701, 9690, 9679, 9668, 9657, 9646, 9635, 9624, 9613, 9602, 9591, 9580, 9569, 9558, 9547, 9536, 9525, 9514, 9503, 9492, 9481, 9470, 9459, 9448, 9437, 9426, 9415, 9404, 9393, 9382, 9371, 9360, 9349, 9338, 9327, 9316, 9305, 9294, 9283, 9272, 9261, 9250, 9239, 9228, 9217, 9206, 9195, 9184, 9173, 9162, 9151, 9140, 9129, 9118, 9107, 9096, 9085, 9074, 9063, 9052, 9041, 9030, 9019, 9008, 8997, 8986, 8975, 8964, 8953, 8942, 8931, 8920, 8909, 8898, 8887, 8876, 8865, 8854, 8843, 8832, 8821, 8810, 8799, 8788, 8777, 8766, 8755, 8744, 8733, 8722, 8711, 8700, 8689, 8678, 8667, 8656, 8645, 8634, 8623, 8612, 8601, 8590, 8579, 8568, 8557, 8546, 8535, 8524, 8513, 8502, 8491, 8480, 8469, 8458, 8447, 8436, 8425, 8414, 8403, 8392, 8381, 8370, 8359, 8348, 8337, 8326, 8315, 8304, 8293, 8282, 8271, 8260, 8249, 8238, 8227, 8216, 8205, 8194, 8183, 8172, 8161, 8150, 8139, 8128, 8117, 8106, 8095, 8084, 8073, 8062, 8051, 8040, 8029, 8018, 8007, 7996, 7985, 7974, 7963, 7952, 7941, 7930, 7919, 7908, 7897, 7886, 7875, 7864, 7853, 7842, 7831, 7820, 7809, 7798, 7787, 7776, 7765, 7754, 7743, 7732, 7721, 7710, 7699, 7688, 7677, 7666, 7655, 7644, 7633, 7622, 7611, 7600, 7589, 7578, 7567, 7556, 7545, 7534, 7523, 7512, 7501, 7490, 7479, 7468, 7457, 7446, 7435, 7424, 7413, 7402, 7391, 7380, 7369, 7358, 7347, 7336, 7325, 7314, 7303, 7292, 7281, 7270],
    arregloB: ["Zoraida", "Zulema", "Zacarías", "Yolanda", "Yolanda", "Ximena", "Wanda", "Violeta", "Violeta", "Virginia", "Viviana", "Víctor", "Víctor", "Victoria", "Victoria", "Vicente", "Verónica", "Verónica", "Valentina", "Valentina", "Úrsula", "Tomás", "Tomás", "Teresa", "Teresa", "Tamara", "Susana", "Susana", "Soledad", "Sofía", "Sofía", "Sofía", "Silvia", "Silvia", "Simón", "Silvio", "Severina", "Sergio", "Sergio", "Sergio", "Sebastián", "Sebastián", "Sara", "Sara", "Sara", "Sara", "Sandra", "Sandra", "Santiago", "Samuel", "Samuel", "Salomón", "Salvador", "Saturnina", "Rubén", "Rubén", "Rubén", "Rosario", "Rosario", "Rosa", "Rosalía", "Rodrigo", "Rodrigo", "Rocío", "Rocío", "Roberto", "Ricardo", "Ricardo", "Renata", "Regina", "Rebeca", "Raúl", "Raúl", "Raúl", "Raquel", "Raquel", "Ramona", "Ramón", "Rafael", "Rafael", "Purificación", "Pilar", "Pilar", "Pilar", "Petra", "Pedro", "Pedro", "Pedro", "Paz", "Paula", "Paula", "Paula", "Paula", "Patricio", "Patricia", "Patricia", "Pablo", "Pablo", "Pablo", "Óscar", "Orlando", "Olga", "Olga", "Octavio", "Noelia", "Noelia", "Noelia", "Nieves", "Nicolás", "Nicolás", "Nuria", "Nuria", "Natalia", "Natalia", "Natalia", "Natalia", "Mónica", "Mónica", "Montserrat", "Milagros", "Miguel", "Miguel", "Miguel", "Micaela", "Mercedes", "Maximiliano", "Maximiliano", "Mauricio", "Matilde", "Matías", "Matías", "Mateo", "Mateo", "Marta", "Marta", "Marta", "Marta", "Martina", "Martina", "Martina", "Martina", "Martín", "Mariana", "Mariana", "Marina", "Marina", "Mario", "Mario", "María", "María", "María", "María", "María", "Marcos", "Marcos", "Manuel", "Manuel", "Magdalena", "Luciano", "Lucía", "Lucía", "Lucía", "Lucía", "Lucas", "Luis", "Luis", "Luis", "Luis", "Luisa", "Luz", "Lorena", "Lorena", "Lorenzo", "Lisandro", "Lidia", "Lidia", "Leticia", "Leopoldo", "Leonor", "Leonardo", "Leonardo", "Leandro", "Laura", "Laura", "Laura", "Laura", "Laura", "Julián", "Julián", "Julia", "Julia", "Julia", "Julio", "Judith", "Juan", "Juan", "Juan", "Josefina", "Josefa", "José", "José", "José", "José", "Jorge", "Jorge", "Jonás", "Jesús", "Jesús", "Javier", "Javier", "Javier", "Javier", "Jaime", "Jacinta", "Jimena", "Jimena", "Iván", "Iván", "Isabel", "Isabel", "Isabel", "Isabela", "Irene", "Irene", "Inés", "Inés", "Inmaculada", "Ignacio", "Ignacio", "Hugo", "Hortensia", "Horacio", "Herminia", "Héctor", "Guillermo", "Guillermo", "Gustavo", "Guadalupe", "Gonzalo", "Gonzalo", "Germán", "Gema", "Gabriel", "Gabriel", "Gabriel", "Gabriela", "Gabriela"]
  },
  punto04: { 
    arregloA: [3456, 7821, 1234, 9087, 4567, 2109, 8765, 5432, 123, 6789, 3456, 9012, 1098, 7654, 4321, 8901, 2345, 5678, 9234, 1456, 6543, 3210, 7890, 4098, 8234, 987, 5321, 9876, 2567, 6109, 3789, 7432, 1876, 5098, 8543, 4209, 9654, 2876, 6321, 456, 7234, 3987, 8109, 1543, 5876, 9321, 4654, 2109, 6987, 3456, 7821, 234, 8654, 5432, 9109, 1987, 4567, 7098, 3210, 6543, 2876, 8765, 5234, 9456, 1234, 4789, 7321, 876, 6109, 3654, 8234, 5987, 9876, 2345, 1543, 4098, 7654, 6321, 9234, 3876, 8109, 5432, 2109, 6789, 1098, 4321, 7890, 3456, 9012, 5678, 8543, 2876, 6234, 987, 4567, 7234, 1876, 5321, 9654, 3109, 8765, 6543, 2345, 5098, 9321, 4654, 7876, 1234, 6109, 3789, 8234, 5876, 9456, 2567, 7098, 4321, 456, 6987, 3654, 8109, 1987, 5234, 9109, 4789, 7543, 2109, 6321, 3456, 8876, 5432, 9876, 1654, 4098, 7234, 876, 6543, 3210, 8654, 5987, 9321, 2345, 6789, 4567, 7890, 1234, 5109, 8765, 3876, 9654, 6234, 2876, 4321, 7654, 987, 5678, 9012, 3456, 8234, 1543, 6109, 4789, 7321, 9876, 5432, 2109, 8543, 6987, 3654, 1098, 5234, 9456, 4567, 7098, 2876, 6543, 456, 8109, 3789, 5876, 9321, 1876, 4654, 7234, 6321, 9109, 3210, 8765, 5098, 2345, 7876, 4321, 9654, 1234, 6109, 3456, 8234, 5987, 2567, 7543, 9876, 4789, 1987, 6234, 8876, 3654, 5432, 9321, 2109, 7654, 4098, 876, 6987, 3876, 8109, 5234, 9456, 1654, 4567, 7321, 2876, 6543, 9012, 3210, 8654, 5678, 1234, 4321, 7890, 6109, 9234, 3456, 8765, 5876, 2345, 7098, 4654, 9876, 1543, 6789, 3987, 8234, 5321, 9654, 2109, 7234, 4876, 987, 6321, 3654, 8543, 5432, 9109],
    arregloB: ["Cristina", "Alejandro", "Hugo", "Fernanda", "Adrián", "Beatriz", "Felipe", "Inés", "Carlos", "Laura", "Héctor", "Ana", "Gustavo", "Claudia", "José", "Emilio", "Daniela", "Pablo", "Isabel", "Bruno", "Ramón", "Elena", "Gonzalo", "Andrea", "Miguel", "Horacio", "Cristóbal", "Lucía", "Alberto", "Natalia", "Fernando", "Diana", "Javier", "Gloria", "Antonio", "Raquel", "Lucas", "Carmen", "Ignacio", "Martina", "Diego", "Benjamín", "Patricia", "César", "Irene", "Manuel", "Bárbara", "Pedro", "Eva", "Rodrigo", "Beatriz", "Guillermo", "Marta", "Iván", "Carolina", "Juan", "Dolores", "Marcos", "Elvira", "Francisco", "Noelia", "Alejandro", "Rosa", "Daniel", "Camila", "Luis", "Helena", "Ricardo", "Alba", "Jesús", "Gema", "Eduardo", "Andrea", "Jorge", "Leticia", "Adrián", "Felisa", "Nicolás", "María", "Emilia", "David", "Pilar", "Gabriel", "Esther", "Andrés", "Nuria", "Mateo", "Judith", "Carlos", "Lidia", "Raúl", "Fernanda", "Alberto", "Cristina", "Dante", "Paula", "Félix", "Ana", "Lorenzo", "Inmaculada", "Diego", "Mariana", "Benjamín", "Carmen", "Hortensia", "José", "Gabriela", "Antonio", "Laura", "Isaías", "Claudia", "Miguel", "Beatriz", "Felipe", "Andrea", "Gonzalo", "Elena", "Javier", "Débora", "Hugo", "Mónica", "Alejandro", "Inés", "Pablo", "Flora", "Ignacio", "Cristina", "Raúl", "Ana", "Germán", "Isabel", "Carlos", "Jimena", "Eduardo", "Natalia", "Bruno", "Patricia", "Manuel", "Irene", "Diego", "Lucía", "Héctor", "Camila", "Francisco", "María", "Rodrigo", "Alba", "Juan", "Esther", "Guillermo", "Rosa", "Daniel", "Julia", "Adrián", "Dolores", "Pedro", "Andrea", "Marcos", "Eva", "Fernando", "Noelia", "Luis", "Bárbara", "Emilio", "Marta", "José", "Carolina", "Alberto", "Leticia", "Gabriel", "Pilar", "César", "Laura", "Iván", "Daniela", "Julián", "Gema", "Alejandro", "Horacio", "Claudia", "Nicolás", "Fabiola", "Diego", "Martina", "Ricardo", "Elena", "David", "Paula", "Andrés", "Lucía", "Miguel", "Cristóbal", "Beatriz", "Lucas", "Carmen", "Gustavo", "Helena", "Antonio", "Nuria", "Javier", "Inmaculada", "Pablo", "Gloria", "Benjamín", "María", "Felipe", "Ana", "Gonzalo", "Elvira", "Hugo", "Judith", "Carlos", "Fernanda", "Emilia", "Raúl", "Isabel", "Dante", "Andrea", "Lorenzo", "Lidia", "Ignacio", "Cristina", "Ramón", "Laura", "Jorge", "Inés", "Mateo", "Rocío", "Adrián", "Felisa", "Pedro", "Mariana", "Eduardo", "Natalia", "Félix", "Patricia", "Francisco", "Mónica", "Raquel", "José", "Flora", "Alberto", "Isaías", "Débora", "Guillermo", "Rosa", "Manuel", "Noelia", "Juan", "Nerea"]
  },
  punto05: { 
    arregloA: [7843, 2109, 9876, 1234, 5678, 8901, 3456, 6543, 4321, 9012, 2876, 7654, 1098, 5432, 8765, 3210, 6789, 4567, 9234, 1876, 7321, 2543, 8109, 5987, 3654, 9876, 1432, 6234, 4789, 8543, 2109, 7098, 5234, 9654, 1987, 6876, 3987, 8234, 4654, 7456, 1654, 5876, 9321, 3456, 8678, 2345, 6109, 4876, 7890, 1234, 5678, 9456, 3876, 7234, 2678, 8987, 5321, 9109, 1543, 6543, 4234, 8456, 2987, 7654, 5987, 9876, 1876, 6321, 3543, 8109, 4567, 7987, 2456, 5654, 9234, 3109, 8876, 6678, 1321, 4987, 7543, 2234, 9654, 5456, 8321, 3678, 6987, 1678, 4543, 7876, 2109, 5987, 9012, 3234, 8654, 6456, 1987, 4321, 7234, 5234, 9876, 2876, 8543, 6234, 3456, 7654, 1456, 5678, 9321, 4109, 8234, 2543, 6876, 3987, 7456, 1234, 5876, 9654, 4678, 8109, 2321, 6543, 3678, 7987, 5456, 9234, 1876, 4876, 8678, 6109, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129],
    arregloB: ["Sergio", "Beatriz", "Marcos", "Patricia", "Hugo", "Daniela", "Raúl", "Elvira", "Ignacio", "Camila", "Javier", "Natalia", "Bruno", "Rosa", "Felipe", "Gloria", "Tomás", "Lucía", "Vicente", "Marta", "Rodrigo", "Carmen", "Arturo", "Isabel", "Mauricio", "Paula", "Germán", "Laura", "Salvador", "Andrea", "Julián", "Cristina", "Damián", "Sofía", "Emiliano", "Elena", "Fabián", "Sara", "Orlando", "María", "Patricio", "Julia", "Ezequiel", "Victoria", "Simón", "Ana", "Baltasar", "Claudia", "Leandro", "Pilar", "Octavio", "Teresa", "Luciano", "Rocío", "Silvio", "Amparo", "Eugenio", "Dolores", "Claudio", "Fernanda", "Horacio", "Irene", "Valentín", "Mónica", "Lisandro", "Alicia", "Celso", "Noelia", "Dante", "Gabriela", "Gaspar", "Miriam", "Urbano", "Rebeca", "Feliciano", "Raquel", "Zacarías", "Judith", "Bautista", "Lidia", "Dámaso", "Noemí", "Elías", "Débora", "Isaías", "Esther", "Jonás", "Ruth", "Melchor", "Abigail", "Salomón", "Susana", "Tobías", "Leticia", "Abdón", "Gema", "Acisclo", "Elisa", "Abelardo", "Diana", "Adán", "Cecilia", "Adolfo", "Silvia", "Albino", "Olga", "Alcides", "Angélica", "Amadeo", "Bárbara", "Ambrosio", "Catalina", "Amílcar", "Clotilde", "Anastasio", "Magdalena", "Anselmo", "Aurelia", "Apolinar", "Hortensia", "Aquiles", "Flora", "Arcadio", "Delia", "Ariel", "Eugenia", "Aristóteles", "Fabiola", "Arnaldo", "Felisa", "Abel", "Ada", "Adela", "Adelaida", "Adriana", "Adrián", "Agustín", "Alba", "Alberto", "Alejandra", "Alejandro", "Alfonso", "Alfredo", "Alicia", "Alma", "Álvaro", "Amalia", "Ana", "Anastasia", "Andrea", "Andrés", "Ángel", "Ángela", "Ángeles", "Anita", "Antonio", "Araceli", "Armando", "Aurora", "Azucena", "Beatriz", "Belén", "Benjamín", "Bernardo", "Blanca", "Bruno", "Camila", "Carla", "Carlos", "Carmen", "Carolina", "Catalina", "Cecilia", "Celeste", "César", "Clara", "Claudia", "Cristian", "Cristina", "Daniel", "Daniela", "David", "Diana", "Diego", "Dolores", "Edmundo", "Eduardo", "Elena", "Elisa", "Elvira", "Emilia", "Emilio", "Emma", "Enrique", "Ernesto", "Esmeralda", "Esperanza", "Estela", "Esteban", "Esther", "Eva", "Fabián", "Fabiola", "Federico", "Felicia", "Felipe", "Fernanda", "Fernando", "Flor", "Flora", "Francisco", "Gabriel", "Gabriela", "Gema", "Germán", "Gloria", "Gonzalo", "Graciela", "Gregorio", "Guadalupe", "Guillermo", "Gustavo", "Héctor", "Helena", "Horacio", "Hugo", "Ignacio", "Inés", "Irene", "Isabel", "Jaime", "Javier", "Jorge", "José", "Josefina", "Juan", "Juana", "Julia", "Julián", "Julio", "Laura", "Leonardo", "Leticia", "Liliana", "Lorenzo", "Lucas", "Lucía", "Luis", "Luisa", "Luz"]
  }
};

let animacionCanvasActiva = null;

// ═══════════════════════════════════════════════════════════════════
// DATOS DE ESCENARIOS
// ═══════════════════════════════════════════════════════════════════
const ESCENARIOS = {
  punto01: { nombre: "Totalmente desordenados", descripcion: "Arreglos sin ningún orden previo" },
  punto02: { nombre: "Casi ordenados", descripcion: "Arreglos con pocos elementos fuera de lugar" },
  punto03: { nombre: "Ordenados invertidamente", descripcion: "Arreglos en orden inverso (mayor a menor)" },
  punto04: { nombre: "Con elementos repetidos", descripcion: "Arreglos con múltiples elementos duplicados" },
  punto05: { nombre: "Mitad ordenados", descripcion: "Primera mitad ordenada, segunda mitad desordenada" }
};

// Algoritmos disponibles
const ALGORITMOS = [
  { id: "bubble", nombre: "Bubble Sort", estable: true, recursiva: false, complejidad: "O(n²)" },
  { id: "bubblePlus", nombre: "Bubble+", estable: true, recursiva: false, complejidad: "O(n²)" },
  { id: "selection", nombre: "Selection Sort", estable: false, recursiva: false, complejidad: "O(n²)" },
  { id: "insertion", nombre: "Insertion Sort", estable: true, recursiva: false, complejidad: "O(n²)" },
  { id: "shell", nombre: "Shell Sort", estable: false, recursiva: false, complejidad: "O(n log² n)" },
  { id: "shaker", nombre: "Shaker Sort", estable: true, recursiva: false, complejidad: "O(n²)" },
  { id: "merge", nombre: "Merge Sort", estable: true, recursiva: true, complejidad: "O(n log n)" },
  { id: "quick", nombre: "Quick Sort", estable: false, recursiva: true, complejidad: "O(n log n)" },
  { id: "heap", nombre: "Heap Sort", estable: false, recursiva: false, complejidad: "O(n log n)" },
  { id: "bucket", nombre: "Bucket Sort", estable: true, recursiva: false, complejidad: "O(n + k)" },
  { id: "radix", nombre: "Radix Sort", estable: true, recursiva: false, complejidad: "O(nk)" },
  { id: "counting", nombre: "Counting Sort", estable: true, recursiva: false, complejidad: "O(n + k)" }
];

// ═══════════════════════════════════════════════════════════════════
// FUNCIONES DE ALGORITMOS
// ═══════════════════════════════════════════════════════════════════

function crearEstadisticas() {
  return { comparaciones: 0, intercambios: 0, iteraciones: 0, tiempo: 0 };
}

function registrarComparacion(stats) {
  stats.comparaciones += 1;
}

function registrarMovimiento(stats, cantidad = 1) {
  stats.intercambios += cantidad;
}

function registrarIteracion(stats, cantidad = 1) {
  stats.iteraciones += cantidad;
}

function crearItems(arr) {
  const esString = arr.some((item) => typeof item === "string");

  if (!esString) {
    return arr.map((v) => ({ value: Number(v), label: String(v) }));
  }

  const normalizar = (texto) =>
    String(texto)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const unicos = Array.from(new Set(arr.map((item) => normalizar(item)))).sort((a, b) => a.localeCompare(b, "es"));
  const ranking = new Map(unicos.map((valor, indice) => [valor, indice + 1]));

  return arr.map((v) => ({
    value: ranking.get(normalizar(v)) ?? 0,
    label: String(v),
  }));
}

function obtenerValoresVisuales(arr) {
  const esString = arr.some((item) => typeof item === "string");

  if (!esString) {
    return arr.map((item) => Number(item));
  }

  return arr.map((item) => {
    const limpio = String(item)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    return limpio.charCodeAt(0) + limpio.length * 4;
  });
}

function snapshotVisualValues(items) {
  return items.map((item) => (typeof item === "number" ? item : item.value));
}

function crearPasoVisual({
  values,
  comparing = [],
  moving = [],
  sorted = [],
  pivot = null,
  phase = "Procesando",
  detail = "Preparando simulacion visual.",
  meta = {}
}) {
  return {
    values,
    comparing,
    moving,
    swapping: moving,
    sorted,
    pivot,
    phase,
    detail,
    meta
  };
}

function inferirFaseVisual({ comparing = [], moving = [], sorted = [] }) {
  if (sorted.length) return "Ordenado";
  if (moving.length) return "Moviendo";
  if (comparing.length) return "Comparando";
  return "Procesando";
}

function inferirDetalleVisual({ comparing = [], moving = [], sorted = [] }) {
  if (sorted.length) return "Elementos marcados como resueltos.";
  if (moving.length) return "Reubicando elementos en la estructura activa.";
  if (comparing.length) return "Evaluando relaciones entre posiciones del arreglo.";
  return "Esperando siguiente paso visual.";
}

function crearContextoVisual(arr) {
  const items = [...obtenerValoresVisuales(arr)];
  return {
    items,
    steps: [crearPasoVisual({
      values: snapshotVisualValues(items),
      phase: "Estado inicial",
      detail: "Arreglo original cargado en el simulador visual."
    })],
    generated: 0,
    limit: Math.min(180, Math.max(36, items.length * 2))
  };
}

function crearContextoInstrumentado(arr) {
  const items = crearItems(arr);
  return {
    items,
    stats: crearEstadisticas(),
    steps: [crearPasoVisual({
      values: snapshotVisualValues(items),
      phase: "Estado inicial",
      detail: "Arreglo original cargado en el simulador visual.",
      meta: {}
    })],
    sorted: new Set()
  };
}

function pushStepInstrumentado(ctx, payload = {}) {
  ctx.steps.push(crearPasoVisual({
    values: snapshotVisualValues(ctx.items),
    comparing: payload.comparing ?? [],
    moving: payload.moving ?? payload.swapping ?? [],
    sorted: payload.sorted ?? Array.from(ctx.sorted),
    pivot: payload.pivot ?? null,
    phase: payload.phase ?? "Procesando",
    detail: payload.detail ?? "Actualizando estado del algoritmo.",
    meta: payload.meta ?? {}
  }));
}

function registrarPasoVisual(ctx, payload = [], swapping = [], sorted = []) {
  if (ctx.generated >= ctx.limit) return false;

  let step;
  if (Array.isArray(payload)) {
    step = crearPasoVisual({
      values: snapshotVisualValues(ctx.items),
      comparing: payload,
      moving: swapping,
      sorted,
      phase: inferirFaseVisual({ comparing: payload, moving: swapping, sorted }),
      detail: inferirDetalleVisual({ comparing: payload, moving: swapping, sorted })
    });
  } else {
    step = crearPasoVisual({
      values: snapshotVisualValues(ctx.items),
      comparing: payload.comparing ?? [],
      moving: payload.moving ?? payload.swapping ?? [],
      sorted: payload.sorted ?? [],
      pivot: payload.pivot ?? null,
      phase: payload.phase ?? inferirFaseVisual(payload),
      detail: payload.detail ?? inferirDetalleVisual(payload),
      meta: payload.meta ?? {}
    });
  }

  ctx.steps.push(step);
  ctx.generated += 1;
  return true;
}

function finalizarPasosVisuales(ctx) {
  ctx.steps.push(crearPasoVisual({
    values: [...ctx.items].sort((a, b) => a - b),
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "La simulacion visual completo el ordenamiento."
  }));
  return ctx.steps;
}

function finalizarInstrumentacion(ctx, inicio) {
  return {
    ...ctx.stats,
    tiempo: performance.now() - inicio,
    steps: ctx.steps
  };
}

function muestrearSteps(steps, maxFrames = 120) {
  if (!steps?.length || steps.length <= maxFrames) return steps;

  const indices = new Set([0, steps.length - 1]);
  steps.forEach((step, index) => {
    const previo = steps[index - 1];
    if (!previo || step.phase !== previo.phase || step.moving?.length || step.pivot !== null) {
      indices.add(index);
    }
  });

  const faltantes = Math.max(0, maxFrames - indices.size);
  if (faltantes > 0) {
    const intervalo = Math.max(1, Math.floor(steps.length / faltantes));
    for (let i = 1; i < steps.length - 1; i += intervalo) {
      indices.add(i);
      if (indices.size >= maxFrames) break;
    }
  }

  return Array.from(indices)
    .sort((a, b) => a - b)
    .map((index) => steps[index]);
}

function instrumentarShellSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();

  for (let gap = Math.floor(ctx.items.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    pushStepInstrumentado(ctx, {
      phase: "Gap actual",
      detail: `Comienza la fase de Shell Sort con gap ${gap}.`,
      meta: { gap }
    });

    for (let i = gap; i < ctx.items.length; i++) {
      const temp = ctx.items[i];
      let j = i;

      pushStepInstrumentado(ctx, {
        moving: [i],
        phase: "Clave activa",
        detail: `Tomando la clave del indice ${i} para insercion por salto.`,
        meta: { gap }
      });

      while (j >= gap) {
        registrarComparacion(ctx.stats);
        registrarIteracion(ctx.stats);

        pushStepInstrumentado(ctx, {
          comparing: [j - gap, j],
          phase: "Comparando por salto",
          detail: `Comparando los indices ${j - gap} y ${j}.`,
          meta: { gap }
        });

        if (ctx.items[j - gap].value <= temp.value) {
          break;
        }

        ctx.items[j] = ctx.items[j - gap];
        registrarMovimiento(ctx.stats);

        pushStepInstrumentado(ctx, {
          moving: [j - gap, j],
          phase: "Desplazando",
          detail: `Desplazando el valor del indice ${j - gap} hacia ${j}.`,
          meta: { gap }
        });

        j -= gap;
      }

      ctx.items[j] = temp;
      registrarMovimiento(ctx.stats);

      pushStepInstrumentado(ctx, {
        moving: [j],
        phase: "Insertando por salto",
        detail: `Insertando la clave activa en el indice ${j}.`,
        meta: { gap }
      });
    }

    pushStepInstrumentado(ctx, {
      phase: "Gap completado",
      detail: `Finaliza la fase con gap ${gap}.`,
      meta: { gap }
    });
  }

  pushStepInstrumentado(ctx, {
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "Shell Sort completo sobre el arreglo activo."
  });

  return finalizarInstrumentacion(ctx, inicio);
}

function instrumentarMergeSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();
  const buffer = new Array(ctx.items.length);

  function mezclar(left, middle, right) {
    let i = left;
    let j = middle + 1;
    let k = 0;

    pushStepInstrumentado(ctx, {
      phase: "Mezclando segmentos",
      detail: `Fusionando los segmentos ${left}-${middle} y ${middle + 1}-${right}.`,
      meta: { left, right }
    });

    while (i <= middle && j <= right) {
      registrarComparacion(ctx.stats);
      registrarIteracion(ctx.stats);
      pushStepInstrumentado(ctx, {
        comparing: [i, j],
        phase: "Comparando frentes",
        detail: `Comparando los frentes ${i} y ${j} antes de mezclar.`,
        meta: { left, right }
      });

      if (ctx.items[i].value <= ctx.items[j].value) {
        buffer[k++] = ctx.items[i++];
      } else {
        buffer[k++] = ctx.items[j++];
      }
      registrarMovimiento(ctx.stats);
    }

    while (i <= middle) {
      buffer[k++] = ctx.items[i++];
      registrarIteracion(ctx.stats);
      registrarMovimiento(ctx.stats);
    }

    while (j <= right) {
      buffer[k++] = ctx.items[j++];
      registrarIteracion(ctx.stats);
      registrarMovimiento(ctx.stats);
    }

    for (let idx = 0; idx < k; idx++) {
      ctx.items[left + idx] = buffer[idx];
      registrarMovimiento(ctx.stats);
      pushStepInstrumentado(ctx, {
        moving: [left + idx],
        phase: "Escribiendo mezcla",
        detail: `Escribiendo el valor fusionado en el indice ${left + idx}.`,
        meta: { left, right }
      });
    }
  }

  function ordenar(left, right) {
    if (left >= right) {
      if (left === right) {
        pushStepInstrumentado(ctx, {
          sorted: [left],
          phase: "Segmento resuelto",
          detail: `Segmento trivial resuelto en el indice ${left}.`,
          meta: { left, right }
        });
      }
      return;
    }

    const middle = Math.floor((left + right) / 2);
    pushStepInstrumentado(ctx, {
      phase: "Dividiendo",
      detail: `Dividiendo el segmento ${left}-${right} en torno a ${middle}.`,
      meta: { left, right }
    });
    ordenar(left, middle);
    ordenar(middle + 1, right);
    mezclar(left, middle, right);
  }

  ordenar(0, ctx.items.length - 1);
  pushStepInstrumentado(ctx, {
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "Merge Sort completo sobre el arreglo activo."
  });
  return finalizarInstrumentacion(ctx, inicio);
}

function instrumentarQuickSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();

  function particionar(left, right) {
    const pivot = ctx.items[right];
    let i = left;

    pushStepInstrumentado(ctx, {
      pivot: right,
      phase: "Pivot activo",
      detail: `El pivot actual esta en el indice ${right}.`,
      meta: { left, right }
    });

    for (let j = left; j < right; j++) {
      registrarComparacion(ctx.stats);
      registrarIteracion(ctx.stats);
      pushStepInstrumentado(ctx, {
        comparing: [j, right],
        pivot: right,
        phase: "Particionando",
        detail: `Comparando el indice ${j} contra el pivot.`,
        meta: { left, right }
      });

      if (ctx.items[j].value < pivot.value) {
        if (i !== j) {
          [ctx.items[i], ctx.items[j]] = [ctx.items[j], ctx.items[i]];
          registrarMovimiento(ctx.stats);
          pushStepInstrumentado(ctx, {
            moving: [i, j],
            pivot: right,
            phase: "Reubicando menores",
            detail: `Moviendo un valor menor hacia el bloque izquierdo (${i}, ${j}).`,
            meta: { left, right }
          });
        }
        i += 1;
      }
    }

    if (i !== right) {
      [ctx.items[i], ctx.items[right]] = [ctx.items[right], ctx.items[i]];
      registrarMovimiento(ctx.stats);
      pushStepInstrumentado(ctx, {
        moving: [i, right],
        pivot: i,
        phase: "Colocando pivot",
        detail: `El pivot se coloca en su posicion final ${i}.`,
        meta: { left, right }
      });
    }

    return i;
  }

  function ordenar(left, right) {
    if (left >= right) {
      if (left === right) {
        pushStepInstrumentado(ctx, {
          sorted: [left],
          phase: "Segmento resuelto",
          detail: `Segmento trivial resuelto en el indice ${left}.`,
          meta: { left, right }
        });
      }
      return;
    }

    pushStepInstrumentado(ctx, {
      phase: "Nuevo subarreglo",
      detail: `Procesando el segmento ${left}-${right}.`,
      meta: { left, right }
    });

    const pivotIndex = particionar(left, right);
    pushStepInstrumentado(ctx, {
      sorted: [pivotIndex],
      pivot: pivotIndex,
      phase: "Pivot fijado",
      detail: `El pivot ya quedo fijo en el indice ${pivotIndex}.`,
      meta: { left, right }
    });

    ordenar(left, pivotIndex - 1);
    ordenar(pivotIndex + 1, right);
  }

  ordenar(0, ctx.items.length - 1);
  pushStepInstrumentado(ctx, {
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "Quick Sort completo sobre el arreglo activo."
  });
  return finalizarInstrumentacion(ctx, inicio);
}

function instrumentarHeapSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();

  function heapify(size, index) {
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    pushStepInstrumentado(ctx, {
      pivot: index,
      phase: "Heapify",
      detail: `Revisando el subarbol con raiz en ${index}.`,
      meta: { left: index, right: size - 1 }
    });

    if (left < size) {
      registrarComparacion(ctx.stats);
      registrarIteracion(ctx.stats);
      pushStepInstrumentado(ctx, {
        comparing: [largest, left],
        pivot: index,
        phase: "Comparando hijos",
        detail: `Comparando la raiz ${largest} con el hijo izquierdo ${left}.`,
        meta: { left: index, right: size - 1 }
      });
      if (ctx.items[left].value > ctx.items[largest].value) largest = left;
    }

    if (right < size) {
      registrarComparacion(ctx.stats);
      registrarIteracion(ctx.stats);
      pushStepInstrumentado(ctx, {
        comparing: [largest, right],
        pivot: index,
        phase: "Comparando hijos",
        detail: `Comparando el mayor actual ${largest} con el hijo derecho ${right}.`,
        meta: { left: index, right: size - 1 }
      });
      if (ctx.items[right].value > ctx.items[largest].value) largest = right;
    }

    if (largest !== index) {
      [ctx.items[index], ctx.items[largest]] = [ctx.items[largest], ctx.items[index]];
      registrarMovimiento(ctx.stats);
      pushStepInstrumentado(ctx, {
        moving: [index, largest],
        pivot: largest,
        phase: "Intercambiando raiz",
        detail: `Intercambiando la raiz ${index} con ${largest} para restaurar el heap.`,
        meta: { left: index, right: size - 1 }
      });
      heapify(size, largest);
    }
  }

  pushStepInstrumentado(ctx, {
    phase: "Construyendo heap",
    detail: "Iniciando la construccion del max-heap.",
    meta: { left: 0, right: ctx.items.length - 1 }
  });

  for (let i = Math.floor(ctx.items.length / 2) - 1; i >= 0; i--) {
    heapify(ctx.items.length, i);
  }

  for (let i = ctx.items.length - 1; i > 0; i--) {
    [ctx.items[0], ctx.items[i]] = [ctx.items[i], ctx.items[0]];
    registrarMovimiento(ctx.stats);
    registrarIteracion(ctx.stats);
    pushStepInstrumentado(ctx, {
      moving: [0, i],
      sorted: Array.from({ length: ctx.items.length - i }, (_, idx) => ctx.items.length - 1 - idx),
      phase: "Extrayendo maximo",
      detail: `Moviendo el maximo actual a la posicion ${i}.`,
      meta: { left: 0, right: i }
    });
    heapify(i, 0);
  }

  pushStepInstrumentado(ctx, {
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "Heap Sort completo sobre el arreglo activo."
  });
  return finalizarInstrumentacion(ctx, inicio);
}

function instrumentarBucketSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();
  const maxValue = Math.max(...ctx.items.map((item) => item.value), 1);
  const bucketCount = Math.max(3, Math.ceil(Math.sqrt(ctx.items.length)));
  const buckets = Array.from({ length: bucketCount }, () => []);

  pushStepInstrumentado(ctx, {
    phase: "Distribuyendo en buckets",
    detail: `Creando ${bucketCount} buckets para distribuir los datos.`,
    meta: { bucket: 0 }
  });

  ctx.items.forEach((item, index) => {
    const bucketIndex = Math.min(bucketCount - 1, Math.floor((item.value / maxValue) * bucketCount));
    buckets[bucketIndex].push(item);
    registrarMovimiento(ctx.stats);
    registrarIteracion(ctx.stats);
    pushStepInstrumentado(ctx, {
      moving: [index],
      phase: "Distribuyendo en buckets",
      detail: `El valor del indice ${index} entra al bucket ${bucketIndex}.`,
      meta: { bucket: bucketIndex }
    });
  });

  buckets.forEach((bucket, bucketIndex) => {
    if (!bucket.length) return;
    pushStepInstrumentado(ctx, {
      phase: "Ordenando bucket",
      detail: `Ordenando internamente el bucket ${bucketIndex}.`,
      meta: { bucket: bucketIndex }
    });

    for (let i = 1; i < bucket.length; i++) {
      const temp = bucket[i];
      let j = i - 1;
      while (j >= 0) {
        registrarComparacion(ctx.stats);
        registrarIteracion(ctx.stats);
        if (bucket[j].value <= temp.value) break;
        bucket[j + 1] = bucket[j];
        registrarMovimiento(ctx.stats);
        j -= 1;
      }
      bucket[j + 1] = temp;
      registrarMovimiento(ctx.stats);
    }
  });

  let outputIndex = 0;
  buckets.forEach((bucket, bucketIndex) => {
    for (const item of bucket) {
      ctx.items[outputIndex] = item;
      registrarMovimiento(ctx.stats);
      registrarIteracion(ctx.stats);
      pushStepInstrumentado(ctx, {
        moving: [outputIndex],
        sorted: Array.from({ length: outputIndex }, (_, idx) => idx),
        phase: "Combinando buckets",
        detail: `Copiando el siguiente valor ordenado del bucket ${bucketIndex} hacia el indice ${outputIndex}.`,
        meta: { bucket: bucketIndex }
      });
      outputIndex += 1;
    }
  });

  pushStepInstrumentado(ctx, {
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "Bucket Sort completo sobre el arreglo activo."
  });
  return finalizarInstrumentacion(ctx, inicio);
}

function instrumentarRadixSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();
  const maxValue = Math.max(...ctx.items.map((item) => item.value), 1);
  const maxDigits = String(maxValue).length;
  let divisor = 1;

  for (let pass = 0; pass < maxDigits; pass++) {
    const buckets = Array.from({ length: 10 }, () => []);
    pushStepInstrumentado(ctx, {
      phase: "Distribuyendo por digito",
      detail: `Inicia la pasada ${pass + 1} usando el digito base ${divisor}.`,
      meta: { digit: pass + 1, pass: pass + 1 }
    });

    ctx.items.forEach((item, index) => {
      const digit = Math.floor((item.value / divisor) % 10);
      buckets[digit].push(item);
      registrarMovimiento(ctx.stats);
      registrarIteracion(ctx.stats);
      pushStepInstrumentado(ctx, {
        moving: [index],
        phase: "Distribuyendo por digito",
        detail: `El valor del indice ${index} se ubica en el bucket del digito ${digit}.`,
        meta: { digit: pass + 1, bucket: digit, pass: pass + 1 }
      });
    });

    let outputIndex = 0;
    buckets.forEach((bucket, bucketIndex) => {
      bucket.forEach((item) => {
        ctx.items[outputIndex] = item;
        registrarMovimiento(ctx.stats);
        registrarIteracion(ctx.stats);
        pushStepInstrumentado(ctx, {
          moving: [outputIndex],
          phase: "Reconstruyendo pasada",
          detail: `Reconstruyendo la pasada ${pass + 1} desde el bucket ${bucketIndex}.`,
          meta: { digit: pass + 1, bucket: bucketIndex, pass: pass + 1 }
        });
        outputIndex += 1;
      });
    });

    pushStepInstrumentado(ctx, {
      phase: "Pasada completada",
      detail: `Finaliza la pasada ${pass + 1} del algoritmo Radix Sort.`,
      meta: { digit: pass + 1, pass: pass + 1 }
    });
    divisor *= 10;
  }

  pushStepInstrumentado(ctx, {
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "Radix Sort completo sobre el arreglo activo."
  });
  return finalizarInstrumentacion(ctx, inicio);
}

function instrumentarCountingSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();
  const maxValue = Math.max(...ctx.items.map((item) => item.value), 1);
  const counter = new Array(maxValue + 1).fill(0);

  pushStepInstrumentado(ctx, {
    phase: "Contando frecuencias",
    detail: `Preparando el contador con rango 0-${maxValue}.`
  });

  ctx.items.forEach((item, index) => {
    counter[item.value] += 1;
    registrarMovimiento(ctx.stats);
    registrarIteracion(ctx.stats);
    pushStepInstrumentado(ctx, {
      moving: [index],
      phase: "Contando frecuencias",
      detail: `Aumentando la frecuencia del valor ${item.value}.`,
      meta: { bucket: item.value }
    });
  });

  for (let i = 1; i < counter.length; i++) {
    counter[i] += counter[i - 1];
    registrarMovimiento(ctx.stats);
    registrarIteracion(ctx.stats);
    pushStepInstrumentado(ctx, {
      phase: "Acumulando conteos",
      detail: `Acumulando frecuencias hasta el valor ${i}.`,
      meta: { bucket: i }
    });
  }

  const output = new Array(ctx.items.length);
  for (let i = ctx.items.length - 1; i >= 0; i--) {
    const value = ctx.items[i].value;
    counter[value] -= 1;
    output[counter[value]] = ctx.items[i];
    registrarMovimiento(ctx.stats, 2);
    registrarIteracion(ctx.stats);
    pushStepInstrumentado(ctx, {
      moving: [counter[value]],
      phase: "Reconstruyendo salida",
      detail: `Ubicando el valor ${value} en la salida ordenada.`,
      meta: { bucket: value }
    });
  }

  for (let i = 0; i < ctx.items.length; i++) {
    ctx.items[i] = output[i];
    registrarMovimiento(ctx.stats);
    registrarIteracion(ctx.stats);
    pushStepInstrumentado(ctx, {
      moving: [i],
      sorted: Array.from({ length: i }, (_, idx) => idx),
      phase: "Copiando resultado",
      detail: `Copiando el valor ordenado al indice ${i}.`,
      meta: { bucket: ctx.items[i].value }
    });
  }

  pushStepInstrumentado(ctx, {
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "Counting Sort completo sobre el arreglo activo."
  });
  return finalizarInstrumentacion(ctx, inicio);
}

function crearPasosBubble(arr) {
  const ctx = crearContextoVisual(arr);
  for (let i = 0; i < ctx.items.length - 1 && ctx.generated < ctx.limit; i++) {
    let huboCambio = false;
    for (let j = 0; j < ctx.items.length - 1 - i && ctx.generated < ctx.limit; j++) {
      registrarPasoVisual(ctx, [j, j + 1]);
      if (ctx.items[j] > ctx.items[j + 1]) {
        [ctx.items[j], ctx.items[j + 1]] = [ctx.items[j + 1], ctx.items[j]];
        registrarPasoVisual(ctx, [], [j, j + 1]);
        huboCambio = true;
      }
    }
    if (!huboCambio) break;
  }
  return finalizarPasosVisuales(ctx);
}

function crearPasosSelection(arr) {
  const ctx = crearContextoVisual(arr);
  for (let i = 0; i < ctx.items.length - 1 && ctx.generated < ctx.limit; i++) {
    let min = i;
    for (let j = i + 1; j < ctx.items.length && ctx.generated < ctx.limit; j++) {
      registrarPasoVisual(ctx, [min, j]);
      if (ctx.items[j] < ctx.items[min]) min = j;
    }
    if (min !== i) {
      [ctx.items[i], ctx.items[min]] = [ctx.items[min], ctx.items[i]];
      registrarPasoVisual(ctx, [], [i, min]);
    }
  }
  return finalizarPasosVisuales(ctx);
}

function crearPasosInsertion(arr) {
  const ctx = crearContextoVisual(arr);
  for (let i = 1; i < ctx.items.length && ctx.generated < ctx.limit; i++) {
    const clave = ctx.items[i];
    let j = i - 1;
    while (j >= 0 && ctx.items[j] > clave && ctx.generated < ctx.limit) {
      registrarPasoVisual(ctx, [j, j + 1]);
      ctx.items[j + 1] = ctx.items[j];
      registrarPasoVisual(ctx, [], [j, j + 1]);
      j -= 1;
    }
    ctx.items[j + 1] = clave;
    registrarPasoVisual(ctx, [j + 1], [j + 1]);
  }
  return finalizarPasosVisuales(ctx);
}

function crearPasosShell(arr) {
  const ctx = crearContextoVisual(arr);
  for (let gap = Math.floor(ctx.items.length / 2); gap > 0 && ctx.generated < ctx.limit; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < ctx.items.length && ctx.generated < ctx.limit; i++) {
      const temp = ctx.items[i];
      let j = i;
      while (j >= gap && ctx.items[j - gap] > temp && ctx.generated < ctx.limit) {
        registrarPasoVisual(ctx, [j - gap, j]);
        ctx.items[j] = ctx.items[j - gap];
        registrarPasoVisual(ctx, [], [j - gap, j]);
        j -= gap;
      }
      ctx.items[j] = temp;
      registrarPasoVisual(ctx, [j], [j]);
    }
  }
  return finalizarPasosVisuales(ctx);
}

function crearPasosShaker(arr) {
  const ctx = crearContextoVisual(arr);
  let inicio = 0;
  let fin = ctx.items.length - 1;
  let cambio = true;
  while (cambio && inicio < fin && ctx.generated < ctx.limit) {
    cambio = false;
    for (let i = inicio; i < fin && ctx.generated < ctx.limit; i++) {
      registrarPasoVisual(ctx, [i, i + 1]);
      if (ctx.items[i] > ctx.items[i + 1]) {
        [ctx.items[i], ctx.items[i + 1]] = [ctx.items[i + 1], ctx.items[i]];
        registrarPasoVisual(ctx, [], [i, i + 1]);
        cambio = true;
      }
    }
    fin -= 1;
    for (let i = fin; i > inicio && ctx.generated < ctx.limit; i--) {
      registrarPasoVisual(ctx, [i - 1, i]);
      if (ctx.items[i - 1] > ctx.items[i]) {
        [ctx.items[i - 1], ctx.items[i]] = [ctx.items[i], ctx.items[i - 1]];
        registrarPasoVisual(ctx, [], [i - 1, i]);
        cambio = true;
      }
    }
    inicio += 1;
  }
  return finalizarPasosVisuales(ctx);
}

function crearPasosQuick(arr) {
  const ctx = crearContextoVisual(arr);
  function quick(inicio, fin) {
    if (inicio >= fin || ctx.generated >= ctx.limit) return;
    const pivote = ctx.items[fin];
    let i = inicio;
    for (let j = inicio; j < fin && ctx.generated < ctx.limit; j++) {
      registrarPasoVisual(ctx, [j, fin]);
      if (ctx.items[j] < pivote) {
        if (i !== j) {
          [ctx.items[i], ctx.items[j]] = [ctx.items[j], ctx.items[i]];
          registrarPasoVisual(ctx, [], [i, j]);
        }
        i += 1;
      }
    }
    if (i !== fin) {
      [ctx.items[i], ctx.items[fin]] = [ctx.items[fin], ctx.items[i]];
      registrarPasoVisual(ctx, [], [i, fin]);
    }
    quick(inicio, i - 1);
    quick(i + 1, fin);
  }
  quick(0, ctx.items.length - 1);
  return finalizarPasosVisuales(ctx);
}

function crearPasosMerge(arr) {
  const ctx = crearContextoVisual(arr);
  const buffer = new Array(ctx.items.length);
  function merge(inicio, medio, fin) {
    let i = inicio;
    let j = medio + 1;
    let k = inicio;
    while (i <= medio && j <= fin && ctx.generated < ctx.limit) {
      registrarPasoVisual(ctx, [i, j]);
      if (ctx.items[i] <= ctx.items[j]) buffer[k++] = ctx.items[i++];
      else buffer[k++] = ctx.items[j++];
    }
    while (i <= medio) buffer[k++] = ctx.items[i++];
    while (j <= fin) buffer[k++] = ctx.items[j++];
    for (let idx = inicio; idx <= fin && ctx.generated < ctx.limit; idx++) {
      ctx.items[idx] = buffer[idx];
      registrarPasoVisual(ctx, [], [idx]);
    }
  }
  function sort(inicio, fin) {
    if (inicio >= fin || ctx.generated >= ctx.limit) return;
    const medio = Math.floor((inicio + fin) / 2);
    sort(inicio, medio);
    sort(medio + 1, fin);
    merge(inicio, medio, fin);
  }
  sort(0, ctx.items.length - 1);
  return finalizarPasosVisuales(ctx);
}

function crearPasosHeap(arr) {
  const ctx = crearContextoVisual(arr);
  function heapify(n, i) {
    if (ctx.generated >= ctx.limit) return;
    let mayor = i;
    const izq = 2 * i + 1;
    const der = 2 * i + 2;
    if (izq < n) {
      registrarPasoVisual(ctx, [mayor, izq]);
      if (ctx.items[izq] > ctx.items[mayor]) mayor = izq;
    }
    if (der < n && ctx.generated < ctx.limit) {
      registrarPasoVisual(ctx, [mayor, der]);
      if (ctx.items[der] > ctx.items[mayor]) mayor = der;
    }
    if (mayor !== i && ctx.generated < ctx.limit) {
      [ctx.items[i], ctx.items[mayor]] = [ctx.items[mayor], ctx.items[i]];
      registrarPasoVisual(ctx, [], [i, mayor]);
      heapify(n, mayor);
    }
  }
  for (let i = Math.floor(ctx.items.length / 2) - 1; i >= 0 && ctx.generated < ctx.limit; i--) heapify(ctx.items.length, i);
  for (let i = ctx.items.length - 1; i > 0 && ctx.generated < ctx.limit; i--) {
    [ctx.items[0], ctx.items[i]] = [ctx.items[i], ctx.items[0]];
    registrarPasoVisual(ctx, [], [0, i]);
    heapify(i, 0);
  }
  return finalizarPasosVisuales(ctx);
}

function crearPasosDistribucion(arr) {
  const ctx = crearContextoVisual(arr);
  const sorted = [...ctx.items].sort((a, b) => a - b);
  const bloque = Math.max(2, Math.ceil(sorted.length / 10));
  for (let i = 0; i < sorted.length && ctx.generated < ctx.limit; i += bloque) {
    const fin = Math.min(sorted.length, i + bloque);
    for (let j = i; j < fin; j++) {
      ctx.items[j] = sorted[j];
    }
    registrarPasoVisual(ctx, [], Array.from({ length: fin - i }, (_, idx) => i + idx), Array.from({ length: i }, (_, idx) => idx));
  }
  return finalizarPasosVisuales(ctx);
}

function crearPasosVisuales(arr, algoritmoId) {
  switch (algoritmoId) {
    case "bubble":
    case "bubblePlus":
      return crearPasosBubble(arr);
    case "selection":
      return crearPasosSelection(arr);
    case "insertion":
      return crearPasosInsertion(arr);
    case "shell":
      return crearPasosShell(arr);
    case "shaker":
      return crearPasosShaker(arr);
    case "quick":
      return crearPasosQuick(arr);
    case "merge":
      return crearPasosMerge(arr);
    case "heap":
      return crearPasosHeap(arr);
    case "bucket":
    case "radix":
    case "counting":
      return crearPasosDistribucion(arr);
    default:
      return crearPasosBubble(arr);
  }
}

function dibujarCanvas(canvas, paso) {
  const contexto = canvas?.getContext("2d");
  if (!contexto || !paso?.values?.length) return;

  const width = canvas.width;
  const height = canvas.height;
  const padding = 18;
  const gap = 1;
  const valores = paso.values;
  const maximo = Math.max(...valores, 1);
  const barWidth = Math.max(2, (width - padding * 2) / valores.length - gap);

  contexto.clearRect(0, 0, width, height);
  contexto.fillStyle = "#1a1916";
  contexto.fillRect(0, 0, width, height);

  valores.forEach((valor, indice) => {
    const x = padding + indice * (barWidth + gap);
    const barHeight = Math.max(6, ((height - padding * 2) * valor) / maximo);
    const y = height - padding - barHeight;

    let color = "#6b7280";
    if (paso.sorted.includes(indice)) color = "#22c55e";
    else if ((paso.moving ?? paso.swapping ?? []).includes(indice)) color = "#f97316";
    else if (paso.pivot === indice) color = "#8b5cf6";
    else if (paso.comparing.includes(indice)) color = "#06b6d4";

    contexto.fillStyle = color;
    contexto.fillRect(x, y, barWidth, barHeight);
  });
}

function actualizarEstadoSimulacion({ paso, indice = 0, total = 0, elementos = {} }) {
  const {
    simAlgoritmoFase,
    simAlgoritmoDetalle,
    simAlgoritmoProgreso
  } = elementos;

  if (simAlgoritmoFase) {
    simAlgoritmoFase.textContent = `Fase: ${paso?.phase ?? "Procesando"}`;
  }

  const detalleMeta = [];
  if (paso?.meta?.gap) detalleMeta.push(`gap ${paso.meta.gap}`);
  if (paso?.meta?.digit !== undefined) detalleMeta.push(`digito ${paso.meta.digit}`);
  if (paso?.meta?.pass !== undefined) detalleMeta.push(`pasada ${paso.meta.pass}`);
  if (paso?.meta?.bucket !== undefined) detalleMeta.push(`bucket ${paso.meta.bucket}`);
  if (paso?.meta?.left !== undefined && paso?.meta?.right !== undefined) {
    detalleMeta.push(`segmento ${paso.meta.left}-${paso.meta.right}`);
  }

  const detalleCompuesto = [paso?.detail, detalleMeta.length ? `Meta: ${detalleMeta.join(" · ")}` : ""]
    .filter(Boolean)
    .join(" ");

  if (simAlgoritmoDetalle) {
    simAlgoritmoDetalle.textContent = `Detalle: ${detalleCompuesto || "Sin detalle operativo disponible."}`;
  }

  if (simAlgoritmoProgreso) {
    simAlgoritmoProgreso.textContent = `Progreso: ${Math.min(indice + 1, total)} / ${total}`;
  }
}

function animarCanvas(canvas, arr, algoritmoId, elementosEstado = {}, pasosInstrumentados = null) {
  if (!canvas) return;

  if (animacionCanvasActiva !== null) {
    window.clearInterval(animacionCanvasActiva);
    animacionCanvasActiva = null;
  }

  const pasosBase = Array.isArray(pasosInstrumentados) && pasosInstrumentados.length
    ? pasosInstrumentados
    : crearPasosVisuales(arr, algoritmoId);
  const pasos = muestrearSteps(pasosBase);
  let indice = 0;

  dibujarCanvas(canvas, pasos[0]);
  actualizarEstadoSimulacion({ paso: pasos[0], indice: 0, total: pasos.length, elementos: elementosEstado });

  animacionCanvasActiva = window.setInterval(() => {
    indice += 1;
    if (indice >= pasos.length) {
      window.clearInterval(animacionCanvasActiva);
      animacionCanvasActiva = null;
      return;
    }
    dibujarCanvas(canvas, pasos[indice]);
    actualizarEstadoSimulacion({ paso: pasos[indice], indice, total: pasos.length, elementos: elementosEstado });
  }, 45);
}

function normalizarClavePunto(punto) {
  return String(punto ?? "").replace(/-/g, "");
}

function limpiarCanvas(canvas) {
  if (animacionCanvasActiva !== null) {
    window.clearInterval(animacionCanvasActiva);
    animacionCanvasActiva = null;
  }

  const contexto = canvas?.getContext("2d");
  if (!contexto || !canvas) return;
  contexto.clearRect(0, 0, canvas.width, canvas.height);
}

function ajustarCanvas(canvas) {
  if (!canvas) return;

  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width * ratio));
  const height = Math.max(1, Math.round(rect.height * ratio));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
}

function instrumentarBubbleSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();
  let terminoTemprano = false;

  for (let i = 0; i < ctx.items.length - 1; i++) {
    let huboCambio = false;
    for (let j = 0; j < ctx.items.length - 1 - i; j++) {
      registrarComparacion(ctx.stats);
      registrarIteracion(ctx.stats);

      pushStepInstrumentado(ctx, {
        comparing: [j, j + 1],
        phase: "Comparando",
        detail: `Comparando valores en indices ${j} y ${j + 1}.`,
        meta: { iteration: i, index: j }
      });

      if (ctx.items[j].value > ctx.items[j + 1].value) {
        [ctx.items[j], ctx.items[j + 1]] = [ctx.items[j + 1], ctx.items[j]];
        registrarMovimiento(ctx.stats);
        pushStepInstrumentado(ctx, {
          moving: [j, j + 1],
          phase: "Intercambiando",
          detail: `Intercambiando valores en indices ${j} y ${j + 1}.`,
          meta: { iteration: i, index: j }
        });
        huboCambio = true;
      }
    }
    pushStepInstrumentado(ctx, {
      sorted: [ctx.items.length - 1 - i],
      phase: "Pasada completa",
      detail: `Completada la pasada ${i + 1}. El ultimo elemento esta ordenado.`,
      meta: { iteration: i }
    });
    if (!huboCambio) {
      terminoTemprano = true;
      pushStepInstrumentado(ctx, {
        sorted: ctx.items.map((_, idx) => idx),
        phase: "Ordenado",
        detail: "Bubble Sort completado sin cambios. Arreglo ordenado."
      });
      break;
    }
  }

  if (!terminoTemprano && ctx.items.every((item, idx, arr) => idx === 0 || arr[idx - 1].value <= item.value)) {
    pushStepInstrumentado(ctx, {
      sorted: ctx.items.map((_, index) => index),
      phase: "Ordenado",
      detail: "Bubble Sort completo sobre el arreglo activo."
    });
  }

  return finalizarInstrumentacion(ctx, inicio);
}

function bubbleSort(arr) {
  return instrumentarBubbleSort(arr);
}

function instrumentarBubblePlusSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();
  let limite = ctx.items.length - 1;
  let iteration = 0;

  while (limite > 0) {
    let nuevoLimite = 0;
    for (let j = 0; j < limite; j++) {
      registrarComparacion(ctx.stats);
      registrarIteracion(ctx.stats);

      pushStepInstrumentado(ctx, {
        comparing: [j, j + 1],
        phase: "Comparando",
        detail: `Comparando valores en indices ${j} y ${j + 1}.`,
        meta: { iteration, index: j, limit: limite }
      });

      if (ctx.items[j].value > ctx.items[j + 1].value) {
        [ctx.items[j], ctx.items[j + 1]] = [ctx.items[j + 1], ctx.items[j]];
        registrarMovimiento(ctx.stats);
        pushStepInstrumentado(ctx, {
          moving: [j, j + 1],
          phase: "Intercambiando",
          detail: `Intercambiando valores en indices ${j} y ${j + 1}.`,
          meta: { iteration, index: j, limit: limite, newLimit: j }
        });
        nuevoLimite = j;
      }
    }
    pushStepInstrumentado(ctx, {
      sorted: [limite],
      phase: "Frontera actualizada",
      detail: `Nueva frontera en ${limite}. Elementos desde ${limite} ordenados.`,
      meta: { iteration, limit: limite, newLimit: nuevoLimite }
    });
    limite = nuevoLimite;
    iteration++;
  }

  pushStepInstrumentado(ctx, {
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "Bubble Sort Optimizado completo sobre el arreglo activo."
  });

  return finalizarInstrumentacion(ctx, inicio);
}

function bubblePlusSort(arr) {
  return instrumentarBubblePlusSort(arr);
}

function instrumentarSelectionSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();

  for (let i = 0; i < ctx.items.length - 1; i++) {
    let min = i;

    pushStepInstrumentado(ctx, {
      phase: "Buscando minimo",
      detail: `Buscando el elemento minimo a partir del indice ${i}.`,
      meta: { position: i }
    });

    for (let j = i + 1; j < ctx.items.length; j++) {
      registrarComparacion(ctx.stats);
      registrarIteracion(ctx.stats);

      pushStepInstrumentado(ctx, {
        comparing: [min, j],
        phase: "Comparando",
        detail: `Comparando el minimo actual (${min}) con el elemento en ${j}.`,
        meta: { position: i, min, compare: j }
      });

      if (ctx.items[j].value < ctx.items[min].value) {
        min = j;
        pushStepInstrumentado(ctx, {
          moving: [min],
          phase: "Nuevo minimo",
          detail: `Nuevo minimo encontrado en el indice ${min}.`,
          meta: { position: i, newMin: min }
        });
      }
    }

    if (min !== i) {
      [ctx.items[i], ctx.items[min]] = [ctx.items[min], ctx.items[i]];
      registrarMovimiento(ctx.stats);
      pushStepInstrumentado(ctx, {
        moving: [i, min],
        phase: "Intercambiando",
        detail: `Intercambiando el minimo (${min}) con la posicion ${i}.`,
        meta: { position: i, min }
      });
    }

    pushStepInstrumentado(ctx, {
      sorted: [i],
      phase: "Posicion resuelta",
      detail: `La posicion ${i} esta ordenada.`,
      meta: { position: i }
    });
  }

  pushStepInstrumentado(ctx, {
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "Selection Sort completo sobre el arreglo activo."
  });

  return finalizarInstrumentacion(ctx, inicio);
}

function selectionSort(arr) {
  return instrumentarSelectionSort(arr);
}

function instrumentarInsertionSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();

  for (let i = 1; i < ctx.items.length; i++) {
    const temp = ctx.items[i];
    let j = i - 1;

    pushStepInstrumentado(ctx, {
      moving: [i],
      phase: "Clave activa",
      detail: `Extrayendo la clave del indice ${i} para insertar.`,
      meta: { keyPosition: i, keyValue: temp.value }
    });

    while (j >= 0) {
      registrarComparacion(ctx.stats);
      registrarIteracion(ctx.stats);

      pushStepInstrumentado(ctx, {
        comparing: [j, j + 1],
        phase: "Comparando",
        detail: `Comparando la clave con el elemento en ${j}.`,
        meta: { keyPosition: i, compare: j }
      });

      if (ctx.items[j].value <= temp.value) {
        break;
      }

      ctx.items[j + 1] = ctx.items[j];
      registrarMovimiento(ctx.stats);
      pushStepInstrumentado(ctx, {
        moving: [j, j + 1],
        phase: "Desplazando",
        detail: `Desplazando el valor del indice ${j} hacia ${j + 1}.`,
        meta: { from: j, to: j + 1 }
      });

      j--;
    }

    ctx.items[j + 1] = temp;
    registrarMovimiento(ctx.stats);
    pushStepInstrumentado(ctx, {
      moving: [j + 1],
      phase: "Insertando",
      detail: `Insertando la clave en el indice ${j + 1}.`,
      meta: { keyPosition: j + 1 }
    });

    pushStepInstrumentado(ctx, {
      sorted: Array.from({ length: i + 1 }, (_, idx) => idx),
      phase: "Subarreglo Ordenado",
      detail: `El subarreglo 0-${i} ahora esta ordenado.`,
      meta: { length: i + 1 }
    });
  }

  pushStepInstrumentado(ctx, {
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "Insertion Sort completo sobre el arreglo activo."
  });

  return finalizarInstrumentacion(ctx, inicio);
}

function insertionSort(arr) {
  return instrumentarInsertionSort(arr);
}

function shellSort(arr) {
  return instrumentarShellSort(arr);
}

function instrumentarShakerSort(arr) {
  const ctx = crearContextoInstrumentado(arr);
  const inicio = performance.now();
  let inicioIdx = 0;
  let finIdx = ctx.items.length - 1;
  let cambio = true;
  let iteration = 0;

  while (cambio && inicioIdx < finIdx) {
    cambio = false;

    pushStepInstrumentado(ctx, {
      phase: "Pasada izq-der",
      detail: `Pasada ${iteration + 1}: recorrido de ${inicioIdx} a ${finIdx}.`,
      meta: { iteration, inicioIdx, finIdx }
    });

    for (let i = inicioIdx; i < finIdx; i++) {
      registrarComparacion(ctx.stats);
      registrarIteracion(ctx.stats);

      pushStepInstrumentado(ctx, {
        comparing: [i, i + 1],
        phase: "Comparando",
        detail: `Comparando indices ${i} y ${i + 1}.`,
        meta: { iteration, index: i }
      });

      if (ctx.items[i].value > ctx.items[i + 1].value) {
        [ctx.items[i], ctx.items[i + 1]] = [ctx.items[i + 1], ctx.items[i]];
        registrarMovimiento(ctx.stats);
        pushStepInstrumentado(ctx, {
          moving: [i, i + 1],
          phase: "Intercambiando",
          detail: `Intercambiando indices ${i} y ${i + 1}.`,
          meta: { iteration, index: i }
        });
        cambio = true;
      }
    }
    finIdx--;

    if (!cambio) {
      pushStepInstrumentado(ctx, {
        sorted: ctx.items.map((_, index) => index),
        phase: "Ordenado",
        detail: "Shaker Sort completo sin cambios. Arreglo ordenado."
      });
      break;
    }

    pushStepInstrumentado(ctx, {
      sorted: [finIdx + 1],
      phase: "Frontera actualizada",
      detail: `Nueva Frontera derecha en ${finIdx + 1}.`,
      meta: { iteration, left: inicioIdx, right: finIdx }
    });

    cambio = false;

    pushStepInstrumentado(ctx, {
      phase: "Pasada der-izq",
      detail: `Pasada ${iteration + 1}: recorrido reverso de ${finIdx} a ${inicioIdx}.`,
      meta: { iteration, inicioIdx, finIdx }
    });

    for (let i = finIdx; i > inicioIdx; i--) {
      registrarComparacion(ctx.stats);
      registrarIteracion(ctx.stats);

      pushStepInstrumentado(ctx, {
        comparing: [i - 1, i],
        phase: "Comparando",
        detail: `Comparando indices ${i - 1} y ${i}.`,
        meta: { iteration, index: i }
      });

      if (ctx.items[i - 1].value > ctx.items[i].value) {
        [ctx.items[i - 1], ctx.items[i]] = [ctx.items[i], ctx.items[i - 1]];
        registrarMovimiento(ctx.stats);
        pushStepInstrumentado(ctx, {
          moving: [i - 1, i],
          phase: "Intercambiando",
          detail: `Intercambiando indices ${i - 1} y ${i}.`,
          meta: { iteration, index: i }
        });
        cambio = true;
      }
    }
    inicioIdx++;
    iteration++;

    pushStepInstrumentado(ctx, {
      sorted: [inicioIdx - 1],
      phase: "Frontera actualizada",
      detail: `Nueva Frontera izquierda en ${inicioIdx - 1}.`,
      meta: { iteration, left: inicioIdx, right: finIdx }
    });
  }

  pushStepInstrumentado(ctx, {
    sorted: ctx.items.map((_, index) => index),
    phase: "Ordenado",
    detail: "Shaker Sort completo sobre el arreglo activo."
  });

  return finalizarInstrumentacion(ctx, inicio);
}

function shakerSort(arr) {
  return instrumentarShakerSort(arr);
}

function mergeSort(arr) {
  return instrumentarMergeSort(arr);
}

function quickSort(arr) {
  return instrumentarQuickSort(arr);
}

function heapSort(arr) {
  return instrumentarHeapSort(arr);
}

function bucketSort(arr) {
  return instrumentarBucketSort(arr);
}

function radixSort(arr) {
  return instrumentarRadixSort(arr);
}

function countingSort(arr) {
  return instrumentarCountingSort(arr);
}

// Mapeo de algoritmos
const algoritmosMap = {
  bubble: bubbleSort,
  bubblePlus: bubblePlusSort,
  selection: selectionSort,
  insertion: insertionSort,
  shell: shellSort,
  shaker: shakerSort,
  merge: mergeSort,
  quick: quickSort,
  heap: heapSort,
  bucket: bucketSort,
  radix: radixSort,
  counting: countingSort
};

const ALGORITMOS_NO_COMPARATIVOS = new Set(["bucket", "radix", "counting"]);

function esNoComparativo(id) {
  return ALGORITMOS_NO_COMPARATIVOS.has(id);
}

function ordenBaseAlgoritmo(id) {
  return ALGORITMOS.findIndex((algo) => algo.id === id);
}

function compararResultados(a, b) {
  if (a.tiempo !== b.tiempo) return a.tiempo - b.tiempo;
  if (a.memoria !== b.memoria) return a.memoria - b.memoria;
  if (a.iteraciones !== b.iteraciones) return a.iteraciones - b.iteraciones;
  if (a.intercambios !== b.intercambios) return a.intercambios - b.intercambios;
  if (a.comparaciones !== b.comparaciones) return a.comparaciones - b.comparaciones;
  return ordenBaseAlgoritmo(a.id) - ordenBaseAlgoritmo(b.id);
}

function estimarMemoria(id, arr) {
  const n = arr.length;
  const valores = crearItems(arr).map((item) => item.value);
  const maxValor = Math.max(...valores, 1);
  const bucketCount = Math.max(3, Math.ceil(Math.sqrt(Math.max(n, 1))));

  let bytes = n * 8;
  switch (id) {
    case "merge":
      bytes += n * 16;
      break;
    case "quick":
      bytes += Math.ceil(Math.log2(n + 1)) * 32;
      break;
    case "heap":
      bytes += n * 2;
      break;
    case "bucket":
      bytes += bucketCount * 24 + n * 12;
      break;
    case "radix":
      bytes += 10 * 24 + n * 12;
      break;
    case "counting":
      bytes += (maxValor + 1) * 8 + n * 8;
      break;
    default:
      bytes += 64;
      break;
  }

  return Number((bytes / 1024).toFixed(1));
}

// ═══════════════════════════════════════════════════════════════════
// GENERAR ANÁLISIS POR ALGORITMO
// ═══════════════════════════════════════════════════════════════════

function generarAnalisisComparativo(resultados) {
  if (!resultados.length) return null;

  const ordenados = [...resultados].sort(compararResultados);
  const masEficiente = ordenados[0];
  const menosEficiente = ordenados[ordenados.length - 1];
  const segundo = ordenados[1] ?? null;
  const penultimo = ordenados[ordenados.length - 2] ?? null;

  const criterio = "Criterio aplicado: tiempo -> memoria -> iteraciones -> movimientos -> comparaciones.";

  let justificacionMas = "";
  let justificacionMenos = "";

  if (segundo) {
    justificacionMas = `Supera a ${segundo.algoritmo} con ${masEficiente.tiempo.toFixed(2)} ms vs ${segundo.tiempo.toFixed(2)} ms, ${masEficiente.memoria.toFixed(1)} KB vs ${segundo.memoria.toFixed(1)} KB e ${masEficiente.iteraciones} vs ${segundo.iteraciones} iteraciones. ${criterio}`;
  } else {
    justificacionMas = `Es el unico algoritmo evaluado con ${masEficiente.tiempo.toFixed(2)} ms y ${masEficiente.memoria.toFixed(1)} KB estimados. ${criterio}`;
  }

  if (penultimo) {
    justificacionMenos = `Queda detras de ${penultimo.algoritmo} con ${menosEficiente.tiempo.toFixed(2)} ms vs ${penultimo.tiempo.toFixed(2)} ms, ${menosEficiente.memoria.toFixed(1)} KB vs ${penultimo.memoria.toFixed(1)} KB y ${menosEficiente.iteraciones} vs ${penultimo.iteraciones} iteraciones; frente al mejor (${masEficiente.algoritmo}) registra ${menosEficiente.intercambios} movimientos vs ${masEficiente.intercambios}. ${criterio}`;
  } else {
    justificacionMenos = `Es el unico algoritmo evaluado con ${menosEficiente.tiempo.toFixed(2)} ms y ${menosEficiente.memoria.toFixed(1)} KB estimados. ${criterio}`;
  }

  return { masEficiente, menosEficiente, justificacionMas, justificacionMenos };
}

// ═══════════════════════════════════════════════════════════════════
// EJECUCIÓN PRINCIPAL
// ═══════════════════════════════════════════════════════════════════

function ejecutarSimulacion(punto, tipoArreglo) {
  const datosPunto = DATOS_PARCIAL_02[normalizarClavePunto(punto)];
  if (!datosPunto) return null;
  
  const arr = tipoArreglo === "A" ? datosPunto.arregloA : datosPunto.arregloB;
  const resultados = [];
  
  for (const algo of ALGORITMOS) {
    const ejecutar = algoritmosMap[algo.id];
    if (ejecutar) {
      const stats = ejecutar([...arr]);
      resultados.push({
        id: algo.id,
        algoritmo: algo.nombre,
        estable: algo.estable,
        recursiva: algo.recursiva,
        complejidad: algo.complejidad,
        memoria: estimarMemoria(algo.id, arr),
        ...stats
      });
    }
  }
  
  return resultados;
}

function esperarSiguienteFrame() {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(() => resolve());
      return;
    }
    setTimeout(resolve, 0);
  });
}

async function ejecutarSimulacionProgresiva(punto, tipoArreglo, onProgress) {
  const datosPunto = DATOS_PARCIAL_02[normalizarClavePunto(punto)];
  if (!datosPunto) return null;

  const arr = tipoArreglo === "A" ? datosPunto.arregloA : datosPunto.arregloB;
  const resultados = [];

  for (const [indice, algo] of ALGORITMOS.entries()) {
    const ejecutar = algoritmosMap[algo.id];
    if (!ejecutar) continue;

    const stats = ejecutar([...arr]);
    resultados.push({
      id: algo.id,
      algoritmo: algo.nombre,
      estable: algo.estable,
      recursiva: algo.recursiva,
      complejidad: algo.complejidad,
      memoria: estimarMemoria(algo.id, arr),
      ...stats
    });

    if (typeof onProgress === "function") {
      onProgress({
        actual: indice + 1,
        total: ALGORITMOS.length,
        algoritmo: algo.nombre
      });
    }

    await esperarSiguienteFrame();
  }

  return resultados;
}

function obtenerTipoArregloLabel(tipo) {
  return tipo === "A" ? "enteros" : "strings";
}

function generarResumenGanador(resultado, tipoArreglo) {
  const familia = esNoComparativo(resultado.id) ? "Algoritmo no comparativo" : "Algoritmo comparativo";
  const estabilidad = resultado.estable ? "estable" : "inestable";
  return `${familia} sobre ${obtenerTipoArregloLabel(tipoArreglo)}. Lidera esta ejecucion con ${resultado.tiempo.toFixed(2)} ms, ${resultado.memoria.toFixed(1)} KB estimados y un perfil ${estabilidad}.`;
}

function obtenerArregloOriginal(punto, tipoArreglo) {
  const datosPunto = DATOS_PARCIAL_02[normalizarClavePunto(punto)];
  if (!datosPunto) return [];
  const arr = tipoArreglo === "A" ? datosPunto.arregloA : datosPunto.arregloB;
  return Array.isArray(arr) ? [...arr] : [];
}

function renderizarMensajeTabla(tablaBody, mensaje) {
  if (!tablaBody) return;
  tablaBody.textContent = "";
  const fila = document.createElement("tr");
  const celda = document.createElement("td");
  celda.colSpan = 11;
  celda.textContent = mensaje;
  fila.appendChild(celda);
  tablaBody.appendChild(fila);
}

function crearTag(classes, texto) {
  const span = document.createElement("span");
  span.className = classes;
  span.textContent = texto;
  return span;
}

function renderizarTablaResultados(tablaBody, resultadosOrdenados) {
  if (!tablaBody) return;

  tablaBody.textContent = "";

  resultadosOrdenados.forEach((res, indice) => {
    const esElMasEficiente = indice === 0;
    const esElMenosEficiente = indice === resultadosOrdenados.length - 1;
    const eficiencia = esElMasEficiente ? "mejor" : esElMenosEficiente ? "peor" : "normal";
    const estado = esElMasEficiente ? "Más eficiente" : esElMenosEficiente ? "Mayor costo" : "Rendimiento medio";
    const color = esElMasEficiente ? "var(--success)" : esElMenosEficiente ? "var(--danger)" : "var(--terra)";

    const fila = document.createElement("tr");
    fila.className = `sim-row ${esElMasEficiente ? "activo" : ""}`.trim();
    fila.style.setProperty("--alg-color", color);

    const tdAlgoritmo = document.createElement("td");
    tdAlgoritmo.className = "td-algoritmo";
    const contenedorAlgoritmo = document.createElement("div");
    contenedorAlgoritmo.className = "parcial-algoritmo";
    const nombreAlgoritmo = document.createElement("strong");
    nombreAlgoritmo.textContent = res.algoritmo;
    contenedorAlgoritmo.appendChild(nombreAlgoritmo);
    tdAlgoritmo.appendChild(contenedorAlgoritmo);

    const tdRank = document.createElement("td");
    tdRank.appendChild(crearTag("parcial-rank", `#${indice + 1}`));

    const tdTiempo = document.createElement("td");
    const metricaTiempo = document.createElement("span");
    metricaTiempo.className = "parcial-metrica";
    metricaTiempo.textContent = res.tiempo.toFixed(2);
    const unidadTiempo = document.createElement("small");
    unidadTiempo.textContent = " ms";
    metricaTiempo.appendChild(unidadTiempo);
    tdTiempo.appendChild(metricaTiempo);

    const tdMemoria = document.createElement("td");
    const metricaMemoria = document.createElement("span");
    metricaMemoria.className = "parcial-metrica";
    metricaMemoria.textContent = res.memoria.toFixed(1);
    const unidadMemoria = document.createElement("small");
    unidadMemoria.textContent = " KB";
    metricaMemoria.appendChild(unidadMemoria);
    tdMemoria.appendChild(metricaMemoria);

    const tdComparaciones = document.createElement("td");
    tdComparaciones.appendChild(crearTag("parcial-metrica", String(res.comparaciones)));

    const tdIntercambios = document.createElement("td");
    tdIntercambios.appendChild(crearTag("parcial-metrica", String(res.intercambios)));

    const tdIteraciones = document.createElement("td");
    tdIteraciones.appendChild(crearTag("parcial-metrica", String(res.iteraciones)));

    const tdComplejidad = document.createElement("td");
    tdComplejidad.appendChild(crearTag("sim-tag", res.complejidad));

    const tdRecursivo = document.createElement("td");
    tdRecursivo.appendChild(
      crearTag(
        `sim-tag sim-tag--recursion ${res.recursiva ? "sim-tag--si" : "sim-tag--no"}`,
        res.recursiva ? "Sí" : "No"
      )
    );

    const tdEstable = document.createElement("td");
    tdEstable.appendChild(
      crearTag(
        `sim-tag sim-tag--estabilidad ${res.estable ? "sim-tag--estable" : "sim-tag--inestable"}`,
        res.estable ? "Estable" : "Inestable"
      )
    );

    const tdEstado = document.createElement("td");
    tdEstado.className = "parcial-estado";
    tdEstado.appendChild(crearTag(`resultado-pill ${eficiencia}`, estado));

    fila.append(
      tdAlgoritmo,
      tdRank,
      tdTiempo,
      tdMemoria,
      tdComparaciones,
      tdIntercambios,
      tdIteraciones,
      tdComplejidad,
      tdRecursivo,
      tdEstable,
      tdEstado
    );
    tablaBody.appendChild(fila);
  });
}

// ═══════════════════════════════════════════════════════════════════
// RENDERIZAR UI
// ═══════════════════════════════════════════════════════════

function inicializarSimulador() {
  const puntoBotones = document.querySelectorAll(".punto-btn");
  const selectorArreglo = document.querySelector(".arreglo-selector");
  const arregloDisplay = document.getElementById("arreglo-display");
  const arregloValor = document.getElementById("arreglo-valor");
  const arregloTipo = document.getElementById("arreglo-tipo");
  const simVisual = document.getElementById("sim-visual");
  const simCanvas = document.getElementById("sim-canvas");
  const btnResetearArreglo = document.getElementById("btn-resetear-arreglo");
  const btnEjecutar = document.getElementById("btn-ejecutar");
  const tablaResultados = document.getElementById("tablas-algoritmos");
  const tablasAlgoritmos = tablaResultados?.querySelector("tbody");
  const resultadosHeader = document.getElementById("resultados-header");
  const analisisFinal = document.getElementById("analisis-final");
  const simAlgoritmoNombre = document.getElementById("sim-algoritmo-nombre");
  const simAlgoritmoResumen = document.getElementById("sim-algoritmo-resumen");
  const simAlgoritmoComplejidad = document.getElementById("sim-algoritmo-complejidad");
  const simAlgoritmoTiempo = document.getElementById("sim-algoritmo-tiempo");
  const simAlgoritmoMemoria = document.getElementById("sim-algoritmo-memoria");
  const simAlgoritmoFase = document.getElementById("sim-algoritmo-fase");
  const simAlgoritmoDetalle = document.getElementById("sim-algoritmo-detalle");
  const simAlgoritmoProgreso = document.getElementById("sim-algoritmo-progreso");

  if (
    !puntoBotones.length ||
    !selectorArreglo ||
    !arregloDisplay ||
    !arregloValor ||
    !arregloTipo ||
    !btnResetearArreglo ||
    !btnEjecutar ||
    !tablasAlgoritmos ||
    !analisisFinal
  ) {
    return;
  }

  if (document.body.dataset.simuladorParcialInicializado === "true") {
    return;
  }
  document.body.dataset.simuladorParcialInicializado = "true";
  
  let puntoActual = null;
  let tipoArregloActual = "A";
  let todosLosResultados = [];

  function limpiarResultados() {
    renderizarMensajeTabla(tablasAlgoritmos, "Selecciona un arreglo y ejecuta la simulación para comparar algoritmos.");
    if (resultadosHeader) resultadosHeader.hidden = true;
    analisisFinal.hidden = true;
    selectorArreglo.hidden = false;
    if (simVisual) simVisual.hidden = true;
    limpiarCanvas(simCanvas);
    if (simAlgoritmoNombre) simAlgoritmoNombre.textContent = "Algoritmo más eficiente";
    if (simAlgoritmoResumen) simAlgoritmoResumen.textContent = "";
    if (simAlgoritmoComplejidad) simAlgoritmoComplejidad.textContent = "";
    if (simAlgoritmoTiempo) simAlgoritmoTiempo.textContent = "";
    if (simAlgoritmoMemoria) simAlgoritmoMemoria.textContent = "";
    if (simAlgoritmoFase) simAlgoritmoFase.textContent = "Fase: Preparando simulación";
    if (simAlgoritmoDetalle) simAlgoritmoDetalle.textContent = "Detalle: Esperando ejecución.";
    if (simAlgoritmoProgreso) simAlgoritmoProgreso.textContent = "Progreso: 0 / 0";
  }

  function actualizarArregloVisible() {
    if (!puntoActual) return;
    const arr = obtenerArregloOriginal(puntoActual, tipoArregloActual);
    const tipoNum = tipoArregloActual === "A" ? "(int)" : "(string)";

    if (arregloTipo) {
      arregloTipo.textContent = tipoNum;
      arregloTipo.dataset.tipo = tipoArregloActual;
    }

    if (arregloValor) {
      arregloValor.textContent = `[${arr.join(", ")}]`;
    }

    if (arregloDisplay) {
      arregloDisplay.hidden = false;
    }
  }
  
  // Evento: seleccionar punto
  puntoBotones.forEach(btn => {
    btn.addEventListener("click", () => {
      puntoBotones.forEach(b => b.classList.remove("activo"));
      btn.classList.add("activo");
      puntoActual = btn.dataset.punto;
      limpiarResultados();
      actualizarArregloVisible();
    });
  });
  
  // Evento: cambiar tipo de arreglo
  const radiosArreglo = document.querySelectorAll('input[name="arreglo"]');
  radiosArreglo.forEach(radio => {
    radio.addEventListener("change", () => {
      tipoArregloActual = radio.value;
      if (puntoActual) {
        actualizarArregloVisible();
      }
    });
  });

  btnResetearArreglo?.addEventListener("click", () => {
    if (!puntoActual) return;
    limpiarResultados();
    actualizarArregloVisible();
  });

  window.addEventListener(
    "resize",
    () => {
      if (!simVisual || simVisual.hidden) return;
      ajustarCanvas(simCanvas);
    },
    { passive: true }
  );
  
  // Evento: ejecutar simulación
  btnEjecutar?.addEventListener("click", async () => {
    if (!puntoActual) {
      renderizarMensajeTabla(tablasAlgoritmos, "Primero selecciona un punto para ejecutar la simulación.");
      return;
    }
    
    // Ocultar selector y mostrar tabla de resultados
    if (selectorArreglo) {
      selectorArreglo.hidden = true;
    }
    
    // Limpiar resultados anteriores
    renderizarMensajeTabla(tablasAlgoritmos, "Procesando resultados...");
    if (resultadosHeader) resultadosHeader.hidden = true;
    analisisFinal.hidden = true;
    limpiarCanvas(simCanvas);
    btnEjecutar.disabled = true;
    
    if (simAlgoritmoFase) simAlgoritmoFase.textContent = "Fase: Ejecutando comparativa";
    if (simAlgoritmoDetalle) simAlgoritmoDetalle.textContent = "Detalle: Iniciando ejecución de algoritmos...";
    if (simAlgoritmoProgreso) simAlgoritmoProgreso.textContent = `Progreso: 0 / ${ALGORITMOS.length}`;

    try {
      todosLosResultados = await ejecutarSimulacionProgresiva(
        puntoActual,
        tipoArregloActual,
        ({ actual, total, algoritmo }) => {
          if (simAlgoritmoDetalle) {
            simAlgoritmoDetalle.textContent = `Detalle: Ejecutando ${algoritmo}...`;
          }
          if (simAlgoritmoProgreso) {
            simAlgoritmoProgreso.textContent = `Progreso: ${actual} / ${total}`;
          }
        }
      );

      if (!todosLosResultados || !todosLosResultados.length) {
        renderizarMensajeTabla(tablasAlgoritmos, "No se pudieron obtener resultados para este punto.");
        return;
      }

    // Ordenar por criterio de eficiencia (tiempo, memoria y costo operativo)
    const resultadosOrdenados = [...todosLosResultados].sort(compararResultados);
    const mejorResultado = resultadosOrdenados[0];

    const datosPunto = DATOS_PARCIAL_02[normalizarClavePunto(puntoActual)];
    const arregloVisual = tipoArregloActual === "A" ? datosPunto.arregloA : datosPunto.arregloB;
    if (simVisual) simVisual.hidden = false;
    await esperarSiguienteFrame();
    ajustarCanvas(simCanvas);

    const resumenGanador = generarResumenGanador(mejorResultado, tipoArregloActual);
    if (simAlgoritmoNombre) simAlgoritmoNombre.textContent = mejorResultado.algoritmo;
    if (simAlgoritmoResumen) simAlgoritmoResumen.textContent = resumenGanador;
    if (simAlgoritmoComplejidad) simAlgoritmoComplejidad.textContent = mejorResultado.complejidad;
    if (simAlgoritmoTiempo) simAlgoritmoTiempo.textContent = `${mejorResultado.tiempo.toFixed(2)} ms`;
    if (simAlgoritmoMemoria) simAlgoritmoMemoria.textContent = `${mejorResultado.memoria.toFixed(1)} KB`;
    animarCanvas(simCanvas, arregloVisual, mejorResultado.id, {
      simAlgoritmoFase,
      simAlgoritmoDetalle,
      simAlgoritmoProgreso
    }, mejorResultado.steps ?? null);
    if (resultadosHeader) resultadosHeader.hidden = false;
    
      renderizarTablaResultados(tablasAlgoritmos, resultadosOrdenados);
    
    // Generar análisis comparativo final
    const analisis = generarAnalisisComparativo(todosLosResultados);
    
      if (analisis) {
        const masEficiente = document.getElementById("mas-eficiente");
        const justificacionMas = document.getElementById("justificacion-mas");
        const menosEficiente = document.getElementById("menos-eficiente");
        const justificacionMenos = document.getElementById("justificacion-menos");

        if (masEficiente) masEficiente.textContent = analisis.masEficiente.algoritmo;
        if (justificacionMas) justificacionMas.textContent = analisis.justificacionMas;
        if (menosEficiente) menosEficiente.textContent = analisis.menosEficiente.algoritmo;
        if (justificacionMenos) justificacionMenos.textContent = analisis.justificacionMenos;
        analisisFinal.hidden = false;
      }
    } catch {
      renderizarMensajeTabla(tablasAlgoritmos, "Ocurrió un error al ejecutar la simulación. Intenta de nuevo.");
      if (simAlgoritmoFase) simAlgoritmoFase.textContent = "Fase: Error en ejecución";
      if (simAlgoritmoDetalle) simAlgoritmoDetalle.textContent = "Detalle: No se pudo completar la comparativa.";
    } finally {
      btnEjecutar.disabled = false;
    }
  });
}

// Inicializar cuando el DOM esté listo
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarSimulador, { once: true });
  } else {
    inicializarSimulador();
  }
}

export { DATOS_PARCIAL_02, ejecutarSimulacion, crearItems };
