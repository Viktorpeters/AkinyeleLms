"use client";

import React, { useState } from "react";
import styles from "./step.module.css";
import { X, ChevronDown, ChevronUp } from "lucide-react";

type District = string;

type Zone = {
  name: string;
  districts: District[];
};

type Centre = {
  centre: string;
  zones: Zone[];
};

const CENTRES: Centre[] = [
  {
    centre: "AKEGBAMI CENTRE",
    zones: [
      {
        name: "IYANA IPAJA DCC",
        districts: [
          "Ipaja 1 District",
          "Baruwa District",
          "Alagutan District",
          "Abesan District",
        ],
      },
      {
        name: "IJU DCC",
        districts: [
          "Iju 1 District",
          "Iju 2 District",
          "Iju Ishaga District",
          "Fagba District",
        ],
      },
      {
        name: "AGEGE ZONE",
        districts: [
          "Agege District",
          "Dopemu District",
          "Tabernacle Of Glory District",
        ],
      },
      {
        name: "OKE-ITA ZONE",
        districts: [
          "Oke-Ita District",
          "Itele District",
          "Imota District",
          "Agbowa District",
        ],
      },
    ],
  },
  {
    centre: "OJU ORE CENTRE",
    zones: [
      {
        name: "OTA DCC",
        districts: [
          "Ota 1 District",
          "Ota 2 District",
          "Ota 3 District",
          "Iyesi District",
        ],
      },
      {
        name: "ADO-ODO DCC",
        districts: [
          "Ado-Odo 1 District",
          "Ado-Odo 2 District",
          "Ado-Odo 3 District",
          "Ijoko District",
        ],
      },
      {
        name: "OWODE ZONE",
        districts: [
          "Owode District",
          "Agbara District",
          "Atan District",
          "Ijaba District",
        ],
      },
    ],
  },
  {
    centre: "KETU CENTRE",
    zones: [
      {
        name: "IKOSI DCC",
        districts: [
          "Ikosi 1 District",
          "Ikosi 2 District",
          "Ikosi 3 District",
          "Agboyi District",
          "Owode-Onirin District",
        ],
      },
      {
        name: "KETU DCC",
        districts: [
          "Ketu 1 District",
          "Ketu 2 District",
          "Ketu 3 District",
          "Mile 12 District",
          "Kosofe District",
        ],
      },
      {
        name: "OLORUNDA ZONE",
        districts: [
          "Olorunda District",
          "Ajelogo District",
          "Alapere District",
          "Orisigun District",
        ],
      },
    ],
  },
  {
    centre: "YABA - WISDOM CENTRE",
    zones: [
      {
        name: "YABA DCC",
        districts: [
          "Yaba District",
          "Akoka District",
          "Anointed Blessed District",
        ],
      },
      {
        name: "EBUTE METTA DCC",
        districts: [
          "Ebute Metta District",
          "Adekitan District",
          "Center Of Glory District",
          "Orisun Ibukun District",
          "Sure Foundation District",
          "Overcomers District",
          "Unity District",
          "Peace District",
        ],
      },
      {
        name: "VINEYARD OF MERCY DCC",
        districts: [
          "Vineyard Of Mercy District",
          "Ajegunle District",
          "Oke-Iye District",
          "Oke-Imole District",
          "Unity District",
          "Redemption District",
          "Abesan District",
          "City Of Peace District",
          "Deliverance District",
        ],
      },
      {
        name: "REDEMPTION ZONE",
        districts: [
          "Chapel Of Comfort District",
          "Redemption District",
          "Iwaya District",
          "Egan District",
          "Morofunlo District",
        ],
      },
      {
        name: "ABULE NLA ZONE",
        districts: [
          "Abule Nla District",
          "Bariga District",
          "Ojo Oniyun District",
        ],
      },
      {
        name: "OYINGBO ZONE",
        districts: [
          "Botanical Garden District",
          "Ile-Ayo District",
          "Makoko District",
          "Ikoga District",
        ],
      },
    ],
  },
  {
    centre: "SOMOLU - SOLUTION CENTRE",
    zones: [
      {
        name: "SOMOLU DCC",
        districts: [
          "Apata District",
          "Yakoyo District",
          "Blessed District",
          "Peace Of God District",
          "Redemption District",
          "Hallelujah District",
          "Oluwashina District",
          "Divine Grace District",
          "Oke Anu District",
          "Unity District",
          "Oke Idande District",
          "Oke-Ife District",
          "Ogo-Oluwatobi District",
          "Oke Itunu District",
          "Help From Above District",
          "Itedo Anu District",
        ],
      },
      {
        name: "BARIGA ZONE",
        districts: [
          "Bariga District",
          "Olanrewaju District",
          "Oke Agbara Ikeyin Aye District",
          "Araromi District",
          "Deliverance District",
          "Triumphant District",
          "Agbala Ayo District",
        ],
      },
      {
        name: "TEMIDIRE ONAJIMI DCC",
        districts: [
          "Temidire District",
          "Mowe 1 District",
          "Leadway District",
          "Promise Of God District",
          "Igbe District",
          "Rock Of Ages District",
        ],
      },
      {
        name: "SOMOLU OLALEYE DCC",
        districts: [
          "Somolu Olaleye District Somolu",
          "Mount Of Miracle District Agiliti",
          "Ile-Ayo District Ejigbo",
          "Oke-Iyanu District Jakande",
          "Oke-Iyanu District Abesan Ipaja",
        ],
      },
    ],
  },
  {
    centre: "AJEROMI - MERCY CENTRE",
    zones: [
      {
        name: "AJEROMI DCC",
        districts: [
          "Mba District",
          "Dillion District",
          "Olayinka District",
          "Comfort District",
          "Ishasi District",
          "Citadel District",
          "Coast Of Solution District",
        ],
      },
      {
        name: "AMUKOKO ZONE",
        districts: [
          "Amukoko District",
          "Renewal District",
          "Kemberi District",
          "Glorious District",
          "Oke-Anu District",
          "Success District",
        ],
      },
      {
        name: "OLODI ZONE",
        districts: ["Olodi District", "Ayetoro District", "Oke-Ayo District"],
      },
      {
        name: "ALABA ORO ZONE",
        districts: ["Alabukun District"],
      },
    ],
  },
  {
    centre: "LAGOS - DOMINION CENTRE",
    zones: [
      {
        name: "LAGOS DCC",
        districts: [
          "Lagos Island",
          "Ilupeju District",
          "Fountain Of All Goodness District",
          "Sari District",
          "Fadeyi District",
          "Peace District",
          "House Of Prayer District",
          "Revival District",
          "Lekki District",
          "Cardoso District",
          "Orile District",
          "Christ Beloved District",
          "Testimony District",
          "Obalende District",
          "End Time District",
        ],
      },
      {
        name: "AJAH ZONE",
        districts: [
          "Ajah District",
          "Ilasan District",
          "Mount Of Joy District",
          "Manna District",
          "Igbo-Efon District",
          "Voice Of God District",
        ],
      },
      {
        name: "OSAPA ZONE",
        districts: [
          "Ayeteju District",
          "Oke-Ira District",
          "Osapa District",
          "Isoji District",
        ],
      },
      {
        name: "OLUSHI DCC",
        districts: ["Olushi District", "Tinubu District", "Mayegun District"],
      },
      {
        name: "KETU 1 ZONE",
        districts: [
          "Ketu 1 District",
          "Ogijo District",
          "Isheri Olofin District",
          "Kings Chapel Distict",
        ],
      },
      {
        name: "LIGHT OF THE WORLD ZONE",
        districts: ["Egbe District", "Solution District", "Sobande District"],
      },
      {
        name: "EPE ZONE",
        districts: ["Epe District", "Oke Alafia District"],
      },
    ],
  },
  {
    centre: "POWER CENTRE",
    zones: [
      {
        name: "IKORODU DCC",
        districts: [
          "Ikorodu District",
          "Oke-Itura District",
          "Bagidan District",
          "Powerline District",
          "Halleluyah Jesu Loba Awon Oba District",
          "Prince Of Peace District",
          "Fountain Of Life District",
          "CAC Amen & Amen District",
          "Ajagunsegun District",
          "Green Pasture District",
          "Power House Of Prayer (P H P) District",
        ],
      },
      {
        name: "RESTORATION ZONE",
        districts: [
          "Restoration District",
          "Royal District",
          "Vineyard District",
        ],
      },
      {
        name: "AMAZING GRACE ZONE",
        districts: [
          "Not specified-one",
          "Not-specified-two",
          "Not-specified-three",
        ],
      },
      {
        name: "OGIJO ZONE",
        districts: [
          "Ogijo District",
          "Temidire District",
          "Oke-Ayo District",
          "Faith & Victory District",
        ],
      },
      {
        name: "LIFE AND POWER ZONE",
        districts: [
          "Life And Power District",
          "Pentecostal District",
          "Divine Fountain",
        ],
      },
      {
        name: "WONDER LAND ZONE",
        districts: [
          "Wonder Land District",
          "Comfort District",
          "Jesu Gbami District",
        ],
      },
      {
        name: "OWUTU ZONE",
        districts: [
          "Owutu District",
          "Imagbon District",
          "Igbo-Olomu District",
        ],
      },
      {
        name: "GLORY OF GOD ZONE",
        districts: [
          "Glory Of God District",
          "Amazing Grace District",
          "Ore-Ofe District",
        ],
      },
    ],
  },
  {
    centre: "ITIRE - FULFILMENT CENTRE",
    zones: [
      {
        name: "ITIRE DCC",
        districts: [
          "Itire District",
          "Atamatase District",
          "English Assembly District",
          "Ilasa District",
          "Ikate District",
          "Oke Anu Oke Odo District",
          "City Of Testimony",
          "Idimu District",
        ],
      },
      {
        name: "MOUNTAIN OF LIGHT ZONE",
        districts: [
          "Mountain Of Light District",
          "Full Victory District",
          "Oke-Itura District",
          "Oke-Imole District",
        ],
      },
      {
        name: "ANOINTING ZONE",
        districts: [
          "Christ Anointing District",
          "Divine Light District",
          "Sogunje District",
          "Egan District",
          "Ogijo District",
        ],
      },
      {
        name: "OKE-IYE ZONE",
        districts: [
          "Oke Iye District",
          "Ago Iwosan District",
          "Igbesa District",
        ],
      },
      {
        name: "SURULERE ZONE",
        districts: [
          "Surulere District",
          "Ajuwon District",
          "Powerhouse Of God District",
          "Egbe District",
          "City Of God District",
          "Agbado District",
        ],
      },
      {
        name: "GRACE TABERNACLE DCC",
        districts: ["Ijesha District", "Ipaja District", "Ejigbo District"],
      },
    ],
  },
  {
    centre: "VICTORY CENTRE",
    zones: [
      {
        name: "IGBOGBO DCC",
        districts: [
          "Igbogbo District",
          "Bayeku District",
          "Oke Itunu District",
          "Agbala-Imularada District",
          "Offin District",
          "Winner's District",
          "City Of Mercy District",
          "Oke Alafia District",
          "Life District",
          "Lucky Fiber District",
        ],
      },
      {
        name: "AYEGBAMI DCC",
        districts: [
          "Ayegbami District",
          "Victory District",
          "Miracles District",
          "House Of Peace District",
          "House Of Blessing District",
        ],
      },
      {
        name: "PEACE REIGNETH ZONE",
        districts: [
          "Peace District",
          "Hand Of God District",
          "Voice Of God District",
          "Palace Of Christ District",
        ],
      },
      {
        name: "LIGHT OF THE WORLD ZONE",
        districts: [
          "Owode District",
          "Royal Priesthood",
          "Oke Isegun District",
        ],
      },
      {
        name: "WONDERCITY ZONE",
        districts: [
          "Wonderland District",
          "Isawo District",
          "Salvation Army District",
          "Royal Scepter District",
        ],
      },
      {
        name: "MERCY OF GOD ZONE, IJEDE",
        districts: [
          "Mercy Of God District",
          "River Of Life District",
          "Liberation District",
        ],
      },
      {
        name: "ALMIGHTY GOD ZONE",
        districts: [
          "ALMIGHTY GOD District",
          "EBUTE IYANU District",
          "ONA IYANU District",
          "OGBA IYANU District",
        ],
      },
      {
        name: "EL-SHADDI DCC",
        districts: [
          "ROCK OF SALVATION District",
          "JOY District",
          "PALACE OF BLESSINGS District",
          "MIRACLE CENTER District",
          "EL-SHADDI District",
        ],
      },
    ],
  },
];

const MultiDropdown: React.FC = () => {
  const [selectedCentre, setSelectedCentre] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [openCentres, setOpenCentres] = useState<Set<string>>(new Set());
  const [openZones, setOpenZones] = useState<Set<string>>(new Set());
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleCentre = (centreName: string) => {
    const newSet = new Set(openCentres);
    newSet.has(centreName) ? newSet.delete(centreName) : newSet.add(centreName);
    setOpenCentres(newSet);
  };

  const toggleZone = (zoneName: string) => {
    const newSet = new Set(openZones);
    newSet.has(zoneName) ? newSet.delete(zoneName) : newSet.add(zoneName);
    setOpenZones(newSet);
  };

  return (
    <div className={styles.container}>
      {/* Selection Boxes */}
      <div className={styles.boxContainer}>
        {selectedCentre && (
          <div className={styles.box}>
            <span>{selectedCentre}</span>
            <X
              size={16}
              className={styles.cancelIcon}
              onClick={() => setSelectedCentre("")}
            />
          </div>
        )}
        {selectedZone && (
          <div className={styles.box}>
            <span>{selectedZone}</span>
            <X
              size={16}
              className={styles.cancelIcon}
              onClick={() => setSelectedZone("")}
            />
          </div>
        )}
        {selectedDistrict && (
          <div className={styles.box}>
            <span>{selectedDistrict}</span>
            <X
              size={16}
              className={styles.cancelIcon}
              onClick={() => setSelectedDistrict("")}
            />
          </div>
        )}
      </div>

      {/* Dropdown */}
      <div className={styles.dropdownWrapper}>
        <div
          className={styles.selectTrigger}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Select your district by zone and centre
          {showDropdown ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {showDropdown && (
          <ul className={styles.dropdown}>
            {CENTRES.map((centre) => (
              <li key={centre.centre} className={styles.centreItem}>
                <div className={styles.centreName}>
                  <span
                    onClick={() => {
                      setSelectedCentre(centre.centre);
                      setSelectedZone("");
                      setSelectedDistrict("");
                    }}
                  >
                    {centre.centre}
                  </span>
                  <span onClick={() => toggleCentre(centre.centre)}>
                    <ChevronDown
                      size={14}
                      className={`${styles.arrowIcon} ${
                        openCentres.has(centre.centre) ? styles.rotate : ""
                      }`}
                    />
                  </span>
                </div>

                {openCentres.has(centre.centre) && (
                  <ul className={styles.zoneList}>
                    {centre.zones.map((zone) => (
                      <li key={zone.name} className={styles.zoneItem}>
                        <div className={styles.zoneName}>
                          <span
                            onClick={() => {
                              setSelectedZone(zone.name);
                              setSelectedDistrict("");
                            }}
                          >
                            {zone.name}
                          </span>
                          <span onClick={() => toggleZone(zone.name)}>
                            <ChevronDown
                              size={12}
                              className={`${styles.arrowIcon} ${
                                openZones.has(zone.name) ? styles.rotate : ""
                              }`}
                            />
                          </span>
                        </div>

                        {openZones.has(zone.name) && (
                          <ul className={styles.districtList}>
                            {zone.districts.map((district) => (
                              <li
                                key={district}
                                className={styles.districtItem}
                                onClick={() => setSelectedDistrict(district)}
                              >
                                {district}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultiDropdown;
