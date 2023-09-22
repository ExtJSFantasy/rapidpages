import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  textcolor?: string;
}

export const Logo = (
  props: LogoProps = {
    textcolor: "#000000",
  },
) => {
  return (
    <svg
      height="100%"
      strokeMiterlimit="10"
      //   style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;"
      version="1.1"
      viewBox="0 0 1912 1930"
      width="100%"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs />
      <clipPath id="ArtboardFrame">
        <rect height="1930" width="1912" x="0" y="0" />
      </clipPath>
      <g clipPath="url(#ArtboardFrame)" id="Untitled">
        <path
          d="M712.356 1901.35C668.472 1889.77 626.273 1875.37 585.164 1857.82C534.818 1836.34 486.559 1810.82 440.613 1781.1C409.572 1761.02 380.026 1738.79 351.186 1715.66C319.443 1690.2 289.909 1662.26 262.076 1632.67C233.8 1602.62 207.164 1571.05 183.082 1537.46C157.449 1501.71 133.729 1464.79 112.883 1425.96C77.584 1360.22 50.8291 1291.22 31.4342 1219.24C20.4218 1178.37 12.403 1136.91 6.91915 1095C4.6401 1077.58 3.26461 1059.99 2.02151 1042.41C-1.32023 995.157 0.403957 947.887 0.771145 900.628C0.878994 886.739 2.99618 872.837 4.66781 858.998C7.09701 838.886 9.45504 818.743 12.7604 798.765C16.9376 773.517 22.4143 748.481 29.0359 723.765C36.2693 696.765 43.6658 669.773 53.0595 643.417C69.0678 598.503 88.0843 554.88 110.135 512.592C127.85 478.618 147.348 445.689 169.226 414.242C194.9 377.337 222.72 342.138 252.531 308.407C267.744 291.192 284.018 275.138 300.682 259.545C334.698 227.715 370.421 197.823 408.822 171.296C446.37 145.358 485.187 121.484 525.929 100.901C575.639 75.7877 627.19 54.9768 680.585 39.2491C723.668 26.5591 767.409 16.1861 812.073 10.4513C840.062 6.8577 868.083 3.84708 896.278 1.84867C928.91-0.464321 961.511-0.361294 994.04 0.816807C1038.5 2.42716 1082.75 7.25486 1126.61 15.2598C1174.48 23.9977 1221.62 35.56 1267.37 52.195C1295.52 62.429 1323.22 73.7941 1350.54 86.1899C1390.05 104.121 1427.91 125.075 1464.65 147.956C1497.73 168.558 1529.1 191.734 1559.42 216.271C1579.33 232.392 1598.04 249.848 1616.78 267.321C1664.47 311.804 1705.48 361.92 1742.78 415.188C1773.21 458.638 1799.91 504.3 1822.29 552.432C1856.13 625.222 1881.01 700.928 1895.59 779.908C1900.47 806.387 1903.59 833.14 1906.54 859.918C1909.43 886.085 1910.46 912.274 1910.8 938.573C1910.93 948.47 1912.8 958.434 1912.16 968.4C1910.7 991.271 1910.56 1014.19 1908.88 1037.07C1907.71 1052.99 1906.35 1068.86 1904.65 1084.73C1901.04 1118.18 1894.96 1151.22 1887.57 1184.01C1874.74 1241.01 1856.3 1296.2 1833.48 1349.96C1832.7 1351.8 1832.08 1353.7 1831.09 1356.36C1830.32 1358.61 1830.25 1360.22 1828.86 1361.93C1826.2 1373.32 1819 1381.97 1814.5 1391.91C1803.38 1416.51 1790.06 1440.01 1776.14 1463.08C1759.81 1490.12 1741.92 1516.15 1723.25 1541.69C1708.31 1562.14 1692.34 1581.75 1675.69 1600.73C1654.21 1625.23 1631.93 1649.01 1607.66 1670.92C1595.09 1682.27 1582.82 1693.99 1569.8 1704.8C1537.55 1731.59 1503.7 1756.19 1468.65 1779.24C1446.37 1793.89 1423.52 1807.6 1400.01 1820C1360.88 1840.65 1320.84 1859.43 1279.01 1874.23C1247.92 1885.22 1216.46 1894.9 1184.59 1903.3C1148.85 1912.71 1112.53 1919.28 1075.93 1923.91C1056.87 1926.33 1037.6 1927.48 1018.39 1928.91C977.117 1931.99 935.853 1930.81 894.627 1929.93C875.51 1929.52 856.298 1927.22 837.162 1925.06C807.384 1921.69 777.943 1916.74 748.692 1910.45C737.965 1908.14 727.318 1905.46 715.934 1902.78C714.253 1902.76 713.5 1902.44 712.356 1901.35Z"
          fill="#2a3d59"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M1828.36 1361.48C1827.74 1359.89 1827.45 1358.09 1829.64 1356.68C1831.7 1358.45 1832.46 1360.33 1828.36 1361.48Z"
          fill="#d04d49"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M711.018 1900.96C711.748 1900.62 712.572 1900.85 713.927 1901.47C713.204 1903.25 712.014 1903.96 711.018 1900.96Z"
          fill="#9e2c2f"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M568.473 1514.24C535.548 1495.92 508.659 1471 482.328 1445.49C422.58 1387.59 375.388 1320.69 340.645 1245.14C315.471 1190.39 298.018 1133.14 288.178 1073.7C280.266 1025.9 277.405 977.662 280.052 929.305C284.776 842.992 303.965 760.039 340.244 681.313C381.39 592.027 438.78 514.793 512.214 449.444C573.083 395.276 641.531 353.541 717.603 324.389C769.463 304.515 822.987 291.499 878.224 285.155C926.105 279.656 974.041 279.257 1021.84 284.088C1099.33 291.919 1173.72 311.564 1243.57 346.816C1248.05 349.076 1252.67 350.931 1258.23 352.435C1260.56 357.411 1257.24 360.089 1254.29 362.688C1212.57 399.414 1171.11 436.424 1129.52 473.293C1092.41 506.196 1055.1 538.876 1017.97 571.761C986.576 599.563 954.682 626.822 923.718 655.087C894.951 681.347 865.703 707.067 836.65 732.991C804.62 761.57 772.481 790.044 740.311 818.473C719.611 836.766 699.012 855.191 678.656 873.865C654.13 896.365 628.739 917.911 604.644 941.412C604.499 941.783 604.777 942.515 605.23 942.693C618.861 943.608 632.061 942.76 646.065 943.474C653.379 944.715 659.864 946.125 667.241 943.614C676.833 943.032 685.572 943.172 695.17 943.408C699.403 943.581 702.778 943.652 707.036 943.419C730.695 943.328 753.483 942.242 777.04 944.297C784.503 950.045 781.885 955.296 776.936 959.666C755.476 978.616 735.313 998.982 713.793 1017.83C696.021 1033.4 678.86 1049.62 661.189 1065.29C651.736 1073.67 642.295 1082.06 632.723 1090.3C630.308 1092.39 627.128 1093.97 626.829 1097.67C628.098 1099.4 629.879 1099.25 631.48 1099.26C669.465 1099.34 707.45 1099.41 745.435 1099.25C749.141 1099.24 752.645 1097.98 756.31 1097.79C761.419 1097.54 766.265 1098.38 771.202 1101.74C775.177 1108.27 771.576 1113.26 769.145 1118.17C756.309 1144.09 742.947 1169.76 730.469 1195.85C706.088 1246.82 680.138 1297.02 655.539 1347.88C630.219 1400.24 603.966 1452.12 578.19 1504.25C576.16 1508.35 574.525 1512.99 568.473 1514.24Z"
          fill="#dd3a35"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M1443.28 495.051C1466.77 517.462 1486.21 542.422 1504.68 568.153C1559.53 644.563 1595.32 729.385 1614.58 821.165C1628.35 886.75 1632.4 953.148 1627.18 1020.02C1621.8 1088.98 1605.98 1155.55 1579.77 1219.49C1551.37 1288.8 1512.24 1351.6 1463.31 1408.39C1422.78 1455.44 1376.56 1495.93 1325.02 1530.35C1286.12 1556.34 1244.73 1577.74 1201.3 1595.24C1158.16 1612.62 1113.58 1624.76 1067.83 1632.77C1016.39 1641.78 964.479 1644.12 912.452 1641.1C875.523 1638.95 838.885 1633.72 802.31 1623.87C798.307 1618.85 801.955 1615.99 804.82 1613.5C835.752 1586.69 864.279 1557.28 895.134 1530.37C915.19 1512.88 934.227 1494.24 953.774 1476.17C997.502 1435.75 1041.5 1395.62 1085.72 1355.74C1105.96 1337.48 1125.72 1318.62 1145.89 1300.25C1182.53 1266.87 1218.54 1232.8 1255.68 1199.97C1268.89 1188.29 1281.21 1175.62 1294.05 1163.53C1328.94 1130.67 1364.36 1098.39 1399.2 1065.49C1410.77 1054.56 1421.66 1042.75 1434.57 1033.2C1437.42 1031.1 1440.33 1028.71 1441.96 1025.05C1438.62 1022.66 1434.89 1023.86 1431.45 1023.85C1392.47 1023.74 1353.49 1023.82 1314.51 1023.74C1309.25 1023.73 1303.75 1024.59 1298.64 1020.35C1294.13 1008.49 1304.62 1004.43 1309.37 997.581C1311.65 994.299 1318.31 992.736 1316.13 988.068C1314.22 984 1308.3 985.856 1304.21 986.194C1297.98 986.707 1291.86 988.254 1285.53 987.604C1272.81 986.298 1268.23 981.159 1268.61 967.687C1273.49 956.217 1283.59 950.236 1291.7 942.756C1303.12 932.222 1313.84 920.852 1327.06 910.601C1323.09 909.472 1319.66 910.02 1316.35 909.925C1291.18 909.207 1265.98 911.375 1240.16 908.353C1233.5 903.283 1232.99 898.72 1237.51 891.892C1250.2 872.746 1259.27 851.541 1269.63 831.119C1322.89 726.12 1375.04 620.561 1427.93 515.374C1431.69 507.889 1434.07 499.069 1443.28 495.051Z"
          fill="#de3935"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M1238.69 904.359C1269.83 904.943 1300.07 905.14 1330.31 905.376C1332.21 905.391 1334.23 904.504 1336.99 906.643C1315.29 926.691 1293.75 946.604 1271.91 967.123C1262.63 985.325 1245.25 994.898 1232.3 1008.71C1229.39 1011.81 1225.25 1013.55 1221.9 1017.3C1193.7 1043.67 1165.28 1068.76 1137.15 1094.18C1113.47 1115.59 1089.65 1136.86 1065.9 1158.2C1035.47 1185.53 1004.72 1212.52 974.632 1240.23C951.387 1261.64 927.743 1282.59 904.314 1303.78C872.262 1332.77 840.364 1361.93 807.997 1390.58C785.841 1410.19 764.133 1430.31 742.072 1450.03C712.079 1476.85 682.345 1503.95 652.123 1530.51C642.889 1538.62 634.637 1547.86 623.933 1555.38C590.912 1584.58 558.931 1613.89 526.157 1642.31C520.002 1647.65 513.045 1651.1 505.136 1654.61C502.824 1654.84 501.548 1654.29 501.118 1652.03C515.02 1621.8 529.719 1592.81 544.186 1563.69C552.159 1547.65 559.759 1531.42 567.62 1514.75C572.811 1508.73 575.049 1501.61 578.268 1495.11C609.559 1431.93 640.593 1368.63 671.775 1305.4C703.989 1240.08 736.285 1174.8 768.541 1109.5C769.277 1108.01 769.954 1106.49 770.811 1104.32C768.302 1096.38 772.908 1090.8 775.677 1084.99C796.669 1040.91 819.065 997.527 840.41 953.177C840.413 952.732 839.685 952.118 839.113 952.035C823.419 952.143 808.297 952.185 793.177 951.991C788.981 951.937 784.527 952.529 780.277 948.738C755.515 947.059 731.457 947.758 706.478 947.761C703.473 948.967 701.255 948.527 698.314 948.197C688.167 947.775 678.782 947.667 668.474 947.695C661.502 949.432 655.354 948.317 648.403 948.146C631.533 947.655 615.515 947.516 598.57 947.273C596.363 946.012 596.166 944.606 597.151 942.417C638.434 904.994 679.153 868.062 720.121 831.41C774.013 783.194 828.103 735.199 882.107 687.108C930.635 643.893 979.056 600.559 1027.71 557.492C1087.1 504.927 1146.72 452.613 1206.18 400.133C1223.66 384.702 1240.98 369.075 1258.67 353.064C1275.22 338.402 1291.44 324.19 1307.72 310.033C1327 293.254 1346.33 276.522 1366.23 259.478C1371.62 257.538 1374.24 259.159 1374.16 265.233C1369.75 274.799 1365.65 283.461 1361.51 292.848C1361.49 294.772 1361.15 295.851 1359.97 297.195C1358.91 298.552 1358.25 299.493 1357.59 301.025C1357.37 313.68 1350.91 323.593 1346.03 333.937C1337.29 352.441 1327.82 370.598 1318.56 389.676C1316.57 395.419 1314.18 400.172 1311.8 404.941C1231.53 565.461 1151.24 725.964 1071.02 886.507C1063.71 901.143 1063.71 901.212 1079.53 901.34C1083.53 901.373 1087.48 902.241 1092.33 901.738C1137.54 900.504 1181.92 901.264 1226.29 901.208C1230.39 901.202 1234.02 902.843 1238.69 904.359Z"
          fill="#faf7f2"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M1298.97 1019C1350.12 1019.54 1400.64 1019.54 1452.93 1019.54C1447.16 1028.12 1440.94 1033.48 1434.69 1038.67C1431.36 1041.44 1428.1 1044.24 1424.95 1047.21C1400.53 1070.29 1376.31 1093.6 1351.54 1116.3C1333.64 1132.71 1315.76 1149.12 1298.15 1165.84C1278.86 1184.17 1259.54 1202.49 1239.7 1220.21C1223.33 1234.83 1207.42 1249.95 1191.27 1264.8C1167.29 1286.86 1143.52 1309.17 1119.06 1330.7C1103.82 1344.12 1089.82 1358.83 1074.26 1371.87C1055.91 1387.25 1039.22 1404.48 1020.77 1419.76C1011.82 1427.17 1003.94 1435.8 995.106 1443.44C981.273 1455.39 968.713 1468.81 954.997 1480.91C933.798 1499.61 914.147 1519.98 892.402 1538.1C882.449 1546.39 872.866 1555.22 863.861 1564.53C849.258 1579.63 832.781 1592.7 818.185 1607.78C813.146 1612.99 806.259 1616.23 801.754 1622.93C800.704 1623.62 799.8 1623.67 798.217 1623.76C790.612 1627.94 783.704 1624.64 777.266 1622.92C747.107 1614.87 717.971 1603.73 689.004 1592.19C685.039 1590.61 680.923 1588.96 678.298 1584.19C676.684 1576.82 681.24 1572.96 685.235 1569.06C704.991 1549.76 726.086 1531.93 746.86 1513.77C771.401 1492.31 794.966 1469.78 819.594 1448.42C849.481 1422.5 877.081 1394.06 906.62 1367.75C943.862 1334.57 980.735 1300.98 1017.88 1267.7C1042.88 1245.3 1067.7 1222.66 1092.51 1200.02C1140.66 1156.09 1187.78 1111.07 1236.18 1067.4C1254.12 1051.21 1271.94 1034.8 1289.98 1017.56C1293.44 1016.31 1296.03 1016.56 1298.97 1019Z"
          fill="#b63131"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M1239.35 904.222C1235.95 904.943 1232.32 905.324 1228.69 905.327C1182.92 905.368 1137.16 905.354 1090.47 905.177C1084.74 900.389 1087.38 895.7 1089.75 891.356C1108.22 857.488 1123.78 822.177 1141.16 787.769C1160.95 748.587 1180.63 709.348 1200.46 670.189C1238.46 595.155 1274.87 519.317 1314.31 445.007C1319.45 435.338 1323.87 425.243 1328.76 415.411C1330.83 411.246 1332.79 406.957 1337.58 403.924C1343.65 401.975 1348.04 404.306 1351.97 407.497C1380.49 430.616 1409.64 452.999 1434.91 479.85C1438.37 483.517 1441.68 487.096 1443.18 492.764C1443.72 493.645 1443.79 493.973 1443.93 494.8C1430.94 516.999 1420.48 540.057 1409.07 562.616C1389.83 600.681 1370.91 638.91 1351.83 677.058C1325.03 730.654 1298.5 784.391 1271.2 837.736C1262.87 854.012 1255.06 870.57 1246.1 886.529C1243.99 890.294 1242.5 894.459 1238.72 897.032C1235.12 899.481 1237.98 901.541 1239.35 904.222Z"
          fill="#b43130"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M678.784 1581.89C682.099 1585.1 686.002 1586.12 689.676 1587.6C724.442 1601.63 759.654 1614.33 796.848 1623.49C796.901 1627.64 794.615 1630.61 791.884 1633C778.855 1644.44 767.261 1657.34 754.811 1669.36C751.225 1672.82 747.969 1676.66 743.307 1678.82C742.419 1679.24 741.473 1679.8 740.887 1680.55C727.33 1697.96 709.572 1710.98 693.588 1725.86C686.06 1732.86 678.416 1739.76 671.198 1747.07C663.921 1754.45 656.2 1761.2 647.559 1766.91C644.782 1768.74 642.093 1770.72 640.251 1773.61C634.946 1781.92 627.309 1787.44 619.174 1792.86C609.021 1799.63 598.836 1806.54 590.858 1816.22C587.016 1820.88 580.529 1821.74 574.866 1823.29C572.437 1823.96 570.511 1822.29 569.457 1819.85C567.387 1815.06 567.21 1810.29 568.671 1805.25C574.525 1785.05 582.56 1765.6 591.604 1746.77C595.516 1738.63 599.153 1730.76 601.148 1722.01C602.938 1714.16 606.923 1707.14 609.937 1699.75C618.443 1678.9 627.072 1658.1 635.679 1637.3C636.614 1635.03 637.456 1632.72 635.058 1631C632.377 1629.08 629.821 1630.28 627.949 1632.38C619.689 1641.64 609.315 1648.39 599.892 1656.27C592.253 1662.65 584.689 1669.13 576.942 1675.38C565.821 1684.35 555.101 1693.76 544.62 1703.47C534.356 1712.98 522.655 1720.67 511.414 1728.93C510.071 1729.92 508.486 1731.01 506.915 1729.83C505.487 1728.75 505.418 1726.82 505.82 1725.21C506.375 1722.97 507.103 1720.73 508.077 1718.64C514.456 1704.97 518.266 1690.51 520.973 1675.75C522.255 1668.77 519.02 1662.03 519.007 1655.03C519.003 1652.73 516.783 1651.85 514.528 1652.68C512.058 1653.59 509.984 1655.53 506.413 1655.58C505.388 1655.27 505.105 1654.9 505.41 1654.15C518.54 1642.99 531.189 1632.34 543.602 1621.41C569.209 1598.87 594.69 1576.19 620.86 1553.3C624.494 1552.44 627.437 1552.58 630.082 1554.2C643.559 1562.45 658.047 1568.66 672.347 1575.25C675.112 1576.52 677.4 1578.29 678.784 1581.89Z"
          fill="#263851"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M1443.77 492.599C1439.29 490.773 1436.07 486.923 1432.64 483.38C1408.87 458.801 1382.66 437.02 1355.75 416.044C1351.07 412.399 1347.13 407.738 1340.77 405.295C1329.63 404.013 1321.28 399.165 1315.03 390.112C1318.75 377.58 1325.3 367.126 1330.42 356.035C1338.73 338.02 1347.82 320.364 1357.09 302.086C1358.23 303.121 1359.31 304.593 1359.42 306.137C1359.83 311.607 1362.93 313.225 1368 313.692C1376.81 314.506 1377.21 315.292 1377.55 324.08C1377.95 334.15 1376.8 343.844 1372.94 353.355C1369.35 362.219 1369.37 372.3 1364.22 380.755C1362.5 383.574 1361.16 386.624 1359.67 389.58C1358.31 392.282 1356.78 395.136 1358.77 398.019C1360.88 401.069 1364.15 401.705 1367.66 401.069C1373.87 399.948 1380.13 399.077 1386.25 397.578C1397.88 394.727 1409.95 395.594 1421.65 392.363C1432.47 389.377 1443.63 387.407 1454.21 383.584C1462.37 380.633 1470.6 382.653 1478.76 382.221C1484.3 381.927 1486.8 386.625 1485.01 393.24C1482.84 401.217 1481.24 409.434 1477 416.765C1471.35 426.552 1466.85 436.714 1464.17 447.88C1461.86 457.514 1456.16 466.043 1451.26 474.639C1448.1 480.194 1445.24 485.651 1443.77 492.599Z"
          fill="#263851"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M1374.4 265.718C1373.18 262.943 1371.77 260.391 1367.55 259.386C1372.18 253.114 1377.97 247.515 1385.85 243.792C1382.22 250.962 1378.58 258.131 1374.4 265.718Z"
          fill="#f3d9d7"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M505.351 1653.61C505.998 1653.77 505.863 1654.71 505.767 1655.17C505.671 1655.64 505.564 1655.61 505.576 1655.66C503.119 1658.1 503.688 1663.21 498.045 1663.3C495.198 1662.61 495.308 1661.18 496.142 1659.6C497.478 1657.07 498.887 1654.58 500.825 1651.7C502.491 1652.03 503.598 1652.74 505.351 1653.61Z"
          fill="#f3d9d7"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M497.84 1663.67C499.709 1660.87 502.055 1658.51 504.994 1655.93C504.524 1659.69 505.86 1665.75 497.84 1663.67Z"
          fill="#263851"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M1360.08 297.49C1359.89 296.503 1360.21 295.396 1361 293.931C1362.96 295.252 1362.74 296.534 1360.08 297.49Z"
          fill="#263851"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M779.522 948.887C800.947 947.968 822.334 947.738 844.644 947.692C845.831 948.229 846.096 948.582 846.179 949.57C842.407 962.422 835.674 973.218 830.162 984.535C810.954 1023.97 791.303 1063.18 771.392 1103.07C761.778 1100.87 752.577 1103.45 743.378 1103.49C704.468 1103.64 665.557 1103.57 626.647 1103.48C623.481 1103.47 619.067 1105.03 617.477 1101.74C615.738 1098.15 620.064 1096.09 622.332 1094.05C637.871 1080.08 653.596 1066.31 669.242 1052.46C678.688 1044.1 687.614 1035.19 697.02 1026.76C718.033 1007.94 739.311 989.371 759.142 969.245C764.007 964.308 769.687 960.146 775.183 955.874C777.392 954.157 779.28 952.521 779.522 948.887Z"
          fill="#b73231"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M648.219 948.213C653.622 947.683 659.694 947.572 666.658 947.646C661.442 950.715 655.172 949.858 648.219 948.213Z"
          fill="#d04d49"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M596.981 942.042C597.618 943.143 597.632 944.485 597.645 946.499C596.423 947.55 594.813 948.02 594.186 946.832C593.056 944.689 595.14 943.586 596.981 942.042Z"
          fill="#f3d9d7"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M698.056 948.256C699.693 947.766 701.834 947.647 704.762 947.715C703.377 949.659 701.045 949.882 698.056 948.256Z"
          fill="#d04d49"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M1299.63 1018.81C1296.8 1019.57 1294 1019.59 1290.36 1019.63C1286.26 1023.84 1281.58 1023.78 1276.92 1024.01C1260.7 1024.81 1244.68 1021.38 1228.48 1021.69C1225.01 1021.76 1222.01 1020.44 1219.81 1016.36C1236.47 999.676 1253.42 983.936 1270.99 967.962C1271.71 979.447 1273.53 981.676 1284.81 983.297C1289.11 983.915 1293.42 983.671 1297.7 982.605C1304.58 980.891 1311.64 981.143 1318.55 982.046C1325.52 982.958 1326.75 986.993 1321.83 992.186C1316.38 997.947 1310.09 1002.86 1304.71 1008.76C1302.15 1011.58 1299.85 1014.16 1299.63 1018.81Z"
          fill="#cb3533"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M1218.88 1015.65C1222.2 1016.89 1225.06 1017.69 1228.11 1017.57C1248.01 1016.85 1267.74 1020.77 1288.58 1019.63C1289.5 1022.39 1288.99 1024.84 1286.7 1026.78C1262.86 1047.01 1240.9 1069.29 1217.72 1090.23C1198.97 1107.18 1180.5 1124.39 1162.16 1141.78C1141.92 1160.98 1120.71 1179.16 1100.27 1198.16C1091.01 1206.75 1081.67 1215.26 1072.47 1223.9C1053.56 1241.65 1033.8 1258.41 1014.62 1275.83C1005.52 1284.1 995.897 1291.76 987.328 1300.67C971.872 1316.73 953.983 1330.13 937.447 1345.02C928.555 1353.03 920.115 1361.5 911.148 1369.46C897.985 1381.14 884.408 1392.5 872.144 1405.07C862.62 1414.83 852.104 1423.45 842.64 1433.26C828.103 1448.32 811.377 1461.04 795.669 1474.86C786.435 1482.99 777.831 1491.77 768.591 1499.93C745.932 1519.93 723.412 1540.09 700.58 1559.9C693.065 1566.42 685.868 1573.42 679.27 1581.97C659.519 1574.22 639.866 1566.39 622.046 1553.46C660.077 1518.3 698.659 1483.57 737.236 1448.83C792.653 1398.94 848.071 1349.04 903.478 1299.14C1000.44 1211.8 1097.39 1124.44 1194.36 1037.11C1202.27 1029.98 1210.27 1022.95 1218.88 1015.65Z"
          fill="#a42d2e"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M1314.66 389.82C1323.94 393.056 1331.7 398.371 1339.65 404.621C1331.91 415.778 1327.52 428.486 1321.34 440.229C1311.75 458.449 1302.49 476.844 1293.13 495.184C1286.33 508.51 1279.55 521.848 1272.83 535.215C1262.99 554.801 1253.17 574.398 1243.4 594.024C1220.73 639.6 1198.07 685.182 1175.48 730.798C1171.94 737.941 1167.92 744.84 1164.1 751.801C1153.55 771.038 1145.6 791.558 1134.44 810.489C1130.41 817.329 1127.59 824.891 1124.29 832.155C1114.26 854.22 1103.29 875.81 1091.35 896.897C1090.15 899.014 1089.57 901.167 1089.55 904.268C1079.28 905.935 1069.02 905.618 1057.56 905.522C1061.44 897.235 1064.77 889.731 1068.43 882.39C1093.79 831.454 1119.17 780.524 1144.65 729.645C1192.63 633.834 1240.71 538.071 1288.68 442.257C1297.32 425.003 1305.67 407.601 1314.66 389.82Z"
          fill="#9e2c2f"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
        <path
          d="M846.379 949.908C845.893 949.824 845.787 949.442 845.624 948.468C846.893 947.814 847.328 948.367 846.379 949.908Z"
          fill="#d04d49"
          fillRule="nonzero"
          opacity="1"
          stroke="none"
        />
      </g>
    </svg>
  );
};
