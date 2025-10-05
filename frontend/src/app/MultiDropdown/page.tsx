"use client";

import React, { useState } from "react";
import styles from "./step.module.css";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useSignupForm } from "@/hooks/useSignupForm";


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
    centre: "APAPA - PRAISE CENTRE",
    zones: [
      {
        name: "APAPA DCC",
        districts: [
          "Apapa District",
          "Oke-Anu District",
          "Oke-Iye District",
          "Somorin District",
          "Abuleaka District",
          "El-Bethel Center District",
        ],
      },
      {
        name: "IJANIKIN ZONE",
        districts: [
          "Oluwatedo District",
          "Palace Of Glory District",
          "Oto-Awori District",
          "God's Power District",
          "Citadel Of Praise District",
        ],
      },
      {
        name: "OWODE ZONE",
        districts: ["Ibudo Agbara District", "Muwo District"],
      },
      {
        name: "OLUTI ZONE",
        districts: [
          "Onireke District",
          "Salem District",
          "Mount Of Joy District",
        ],
      },
      {
        name: "MILE 2 ZONE",
        districts: [
          "Oke-Igbala District",
          "Mount Of Glorification District",
          "Oke-Irapada District",
          "Oke-Itura District",
          "Emmanuel District",
        ],
      },
      {
        name: "TIWADIRE ZONE",
        districts: [
          "Araromi District",
          "Oke-Ayo District",
          "Oke-Ibukun District",
        ],
      },
    ],
  },
  // second center
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
  // third center
  {
    centre: "KOSOFE - BREAKTHROUGH CENTRE",
    zones: [
      {
        name: "KOSOFE DCC",
        districts: [
          "Ojota District",
          "Mende District",
          "God's Miracles District",
          "Victory In Christ District",
          "Mowe District",
          "Ibafo District",
          "Anthony District",
        ],
      },
      {
        name: "KETU DCC",
        districts: [
          "Ketu District",
          "Ebenezer District, Ibafo",
          "Salvation District, Ogijo",
          "Apeka District, Ikorodu",
          "Egbeda District",
          "God’s Grace District, Magboro",
          "Mercyland District Alapere",
          "Life Of Peace District, Magodo",
        ],
      },
      {
        name: "ALAPERE DCC",
        districts: [
          "Oke Igbala District",
          "Deliverance District",
          "Ogo Oluwa District",
          "Ore-Ofe District",
          "Miracle District",
        ],
      },
      {
        name: "MOWE ZONE",
        districts: [
          "Mowe District",
          "Loburo District",
          "Daleko District",
          "Adesan District",
          "Land Of Praise District",
          "Gbegira District",
        ],
      },
      {
        name: "OJODU ABIODUN ZONE",
        districts: [
          "Ojodu Abiodun",
          "Fountain Of Life, Mowe",
          "Fountain Of Life, Magboro",
          "Solution District, Alagbole",
          "Ibudo Olorun Emi Ni District, Ibafo",
        ],
      },
      {
        name: "MERCYLAND UNITY ZONE, AKUTE",
        districts: [
          "Mercyland District",
          "Olanbe District",
          "Matogun District",
        ],
      },
      {
        name: "CHRIST FAMILY ZONE",
        districts: [
          "Ikosi District",
          "Ojudu District",
          "Fountain Of Mercy District",
        ],
      },
      {
        name: "OGO-OLUWA NTAN ZONE",
        districts: [
          "Ogo-Oluwa District",
          "Glory To Glory District",
          "City Of God District",
        ],
      },
      {
        name: "SOLID ROCK ZONE",
        districts: [
          "Ori Okuta District",
          "Maya District",
          "Palace Of Peace District",
        ],
      },
    ],
  },

  //  fourth center

  {
    centre: "SOMOLU - SOLUTION CENTER",
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
  // fifth center
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

  // sixth center
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
        districts: ["Olushi District", "Tinubu District", "Mayegun"],
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
  // seventh center
  {
    centre: "POWER CENTER",
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
        districts: [],
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
  // eigth center
  {
    centre: "ITIRE CENTER - FUFILMENT CENTER",
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
        ],
      },
      {
        name: "OKE-IYE ZONE",
        districts: [
          "Oke Iye District",
          "Ago Iwosan District",
          "Igbesa District",
          "Egan District",
          "Ogijo District",
        ],
      },
      {
        name: "SURULERE ZONE",
        districts: [
          "Surulere District",
          "Ajuwon District",
          "Powerhouse Of God District",
        ],
      },
      {
        name: "GRACE TABERNACLE DCC",
        districts: [
          "Ijesha District",
          "Ipaja District",
          "Ejigbo District",
          "Egbe District",
          "City Of God District",
          "Agbado District",
        ],
      },
    ],
  },
  // ninth center
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
        ],
      },
      {
        name: "LIGHT OF THE WORLD ZONE",
        districts: [
          "Owode District",
          "Royal Priesthood",
          "Oke Isegun District",
          "Palace Of Christ District",
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
          "Almighty God District",
          "Ebute Iyanu District",
          "Ona Iyanu District",
          "Ogba Iyanu District",
        ],
      },
      {
        name: "EL-SHADDI DCC",
        districts: [
          "Rock Of Salvation District",
          "Joy District",
          "Palace Of Blessings District",
          "Miracle Center District",
          "El-Shaddi District",
        ],
      },
    ],
  },
];

const MultiDropdown: React.FC = () => {
const { formData, updateSelections } = useSignupForm();

  const [selectedCentre, setSelectedCentre] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [openCentres, setOpenCentres] = useState(new Set<string>());
  const [openZones, setOpenZones] = useState(new Set<string>());

  // helper to update hook formData whenever selections change
  const updateFormSelections = (centre?: string, zone?: string, district?: string) => {
    setFormData((prev) => ({
      ...prev,
      centre: centre ?? selectedCentre,
      zone: zone ?? selectedZone,
      district: district ?? selectedDistrict,
    }));
  };

  const toggleCentre = (centre: string) => {
    setOpenCentres((prev) => {
      const newSet = new Set(prev);
      newSet.has(centre) ? newSet.delete(centre) : newSet.add(centre);
      return newSet;
    });
  };

  const toggleZone = (zone: string) => {
    setOpenZones((prev) => {
      const newSet = new Set(prev);
      newSet.has(zone) ? newSet.delete(zone) : newSet.add(zone);
      return newSet;
    });
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
              onClick={() => {
                setSelectedCentre("");
                updateFormSelections("");
                setShowDropdown(true);
              }}
            />
          </div>
        )}
        {selectedZone && (
          <div className={styles.box}>
            <span>{selectedZone}</span>
            <X
              size={16}
              className={styles.cancelIcon}
              onClick={() => {
                setSelectedZone("");
                updateFormSelections(undefined, "");
                setShowDropdown(true);
              }}
            />
          </div>
        )}
        {selectedDistrict && (
          <div className={styles.box}>
            <span>{selectedDistrict}</span>
            <X
              size={16}
              className={styles.cancelIcon}
              onClick={() => {
                setSelectedDistrict("");
                updateFormSelections(undefined, undefined, "");
                setShowDropdown(true);
              }}
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
                      updateFormSelections(centre.centre, "", "");
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
                              updateFormSelections(undefined, zone.name, "");
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
                                onClick={() => {
                                  setSelectedDistrict(district);
                                  updateFormSelections(undefined, undefined, district);
                                }}
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
