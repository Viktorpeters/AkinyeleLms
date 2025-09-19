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
  name: string;
  zones: Zone[];
};

const CENTRES: Centre[] = [
  {
    name: "BREAKTHROUGH CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Breakthrough Zone ${i + 1}`,
      districts: Array.from({ length: 5 }, (_, j) => `Breakthrough District ${i + 1}-${j + 1}`),
    })),
  },
  {
    name: "PRAISE CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Praise Zone ${i + 1}`,
      districts: Array.from({ length: 5 }, (_, j) => `Praise District ${i + 1}-${j + 1}`),
    })),
  },
  {
    name: "FULFILMENT CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Fulfilment Zone ${i + 1}`,
      districts: Array.from({ length: 5 }, (_, j) => `Fulfilment District ${i + 1}-${j + 1}`),
    })),
  },
  {
    name: "DOMINION CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Dominion Zone ${i + 1}`,
      districts: Array.from({ length: 5 }, (_, j) => `Dominion District ${i + 1}-${j + 1}`),
    })),
  },
  {
    name: "WISDOM CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Wisdom Zone ${i + 1}`,
      districts: Array.from({ length: 5 }, (_, j) => `Wisdom District ${i + 1}-${j + 1}`),
    })),
  },
  {
    name: "MERCY CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Mercy Zone ${i + 1}`,
      districts: Array.from({ length: 5 }, (_, j) => `Mercy District ${i + 1}-${j + 1}`),
    })),
  },
  {
    name: "SOLUTION CENTER",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Solution Zone ${i + 1}`,
      districts: Array.from({ length: 5 }, (_, j) => `Solution District ${i + 1}-${j + 1}`),
    })),
  },
  {
    name: "POWER CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Power Zone ${i + 1}`,
      districts: Array.from({ length: 5 }, (_, j) => `Power District ${i + 1}-${j + 1}`),
    })),
  },
  {
    name: "VICTORY CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Victory Zone ${i + 1}`,
      districts: Array.from({ length: 5 }, (_, j) => `Victory District ${i + 1}-${j + 1}`),
    })),
  },
];

const CompactMultiLevelDropdown: React.FC = () => {
  const [selectedCentre, setSelectedCentre] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeCentre, setActiveCentre] = useState<string | null>(null);
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const cancelCentre = () => {
    setSelectedCentre("");
    setSelectedZone("");
    setSelectedDistrict("");
    setActiveCentre(null);
    setActiveZone(null);
  };
  const cancelZone = () => {
    setSelectedZone("");
    setSelectedDistrict("");
    setActiveZone(null);
  };
  const cancelDistrict = () => setSelectedDistrict("");

  return (
    <div className={styles.container}>
      {/* Selection Boxes */}
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <span>{selectedCentre || "Select Centre"}</span>
          {selectedCentre && (
            <X size={16} className={styles.cancelIcon} onClick={cancelCentre} />
          )}
        </div>
        <div className={styles.box}>
          <span>{selectedZone || "Select Zone"}</span>
          {selectedZone && <X size={16} className={styles.cancelIcon} onClick={cancelZone} />}
        </div>
        <div className={styles.box}>
          <span>{selectedDistrict || "Select District"}</span>
          {selectedDistrict && (
            <X size={16} className={styles.cancelIcon} onClick={cancelDistrict} />
          )}
        </div>
      </div>

      {/* Dropdown Trigger */}
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
              <li
                key={centre.name}
                className={`${styles.centreItem} ${activeCentre === centre.name ? "active" : ""}`}
              >
                <div
                  className={styles.centreName}
                  onClick={() => {
                    setSelectedCentre(centre.name);
                    setSelectedZone("");
                    setSelectedDistrict("");
                    setActiveCentre(centre.name);
                    setActiveZone(null);
                  }}
                >
                  {centre.name}
                  <ChevronDown size={14} className={styles.arrowIcon} />
                </div>

                {/* Zones */}
                {activeCentre === centre.name && (
                  <ul className={`${styles.zoneList}`}>
                    {centre.zones.map((zone) => (
                      <li
                        key={zone.name}
                        className={`${styles.zoneItem} ${
                          activeZone === zone.name ? "active" : ""
                        }`}
                      >
                        <div
                          className={styles.zoneName}
                          onClick={() => {
                            setSelectedZone(zone.name);
                            setSelectedDistrict("");
                            setActiveZone(zone.name);
                          }}
                        >
                          {zone.name}
                          <ChevronDown size={12} className={styles.arrowIcon} />
                        </div>

                        {/* Districts */}
                        {activeZone === zone.name && (
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

export default CompactMultiLevelDropdown;
