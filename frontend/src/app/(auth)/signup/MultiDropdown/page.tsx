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
      districts: Array.from(
        { length: 5 },
        (_, j) => `Breakthrough District ${i + 1}-${j + 1}`
      ),
    })),
  },
  {
    name: "PRAISE CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Praise Zone ${i + 1}`,
      districts: Array.from(
        { length: 5 },
        (_, j) => `Praise District ${i + 1}-${j + 1}`
      ),
    })),
  },
  {
    name: "FULFILMENT CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Fulfilment Zone ${i + 1}`,
      districts: Array.from(
        { length: 5 },
        (_, j) => `Fulfilment District ${i + 1}-${j + 1}`
      ),
    })),
  },
  {
    name: "DOMINION CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Dominion Zone ${i + 1}`,
      districts: Array.from(
        { length: 5 },
        (_, j) => `Dominion District ${i + 1}-${j + 1}`
      ),
    })),
  },
  {
    name: "WISDOM CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Wisdom Zone ${i + 1}`,
      districts: Array.from(
        { length: 5 },
        (_, j) => `Wisdom District ${i + 1}-${j + 1}`
      ),
    })),
  },
  {
    name: "MERCY CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Mercy Zone ${i + 1}`,
      districts: Array.from(
        { length: 5 },
        (_, j) => `Mercy District ${i + 1}-${j + 1}`
      ),
    })),
  },
  {
    name: "SOLUTION CENTER",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Solution Zone ${i + 1}`,
      districts: Array.from(
        { length: 5 },
        (_, j) => `Solution District ${i + 1}-${j + 1}`
      ),
    })),
  },
  {
    name: "POWER CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Power Zone ${i + 1}`,
      districts: Array.from(
        { length: 5 },
        (_, j) => `Power District ${i + 1}-${j + 1}`
      ),
    })),
  },
  {
    name: "VICTORY CENTRE",
    zones: Array.from({ length: 5 }, (_, i) => ({
      name: `Victory Zone ${i + 1}`,
      districts: Array.from(
        { length: 5 },
        (_, j) => `Victory District ${i + 1}-${j + 1}`
      ),
    })),
  },
];

const MultiDropdown: React.FC = () => {
  const [selectedCentre, setSelectedCentre] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // track open centres and zones as sets
  const [openCentres, setOpenCentres] = useState<Set<string>>(new Set());
  const [openZones, setOpenZones] = useState<Set<string>>(new Set());
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleCentre = (centreName: string) => {
    const newSet = new Set(openCentres);
    if (newSet.has(centreName)) newSet.delete(centreName);
    else newSet.add(centreName);
    setOpenCentres(newSet);
  };

  const toggleZone = (zoneName: string) => {
    const newSet = new Set(openZones);
    if (newSet.has(zoneName)) newSet.delete(zoneName);
    else newSet.add(zoneName);
    setOpenZones(newSet);
  };

  const cancelCentre = () => {
    setSelectedCentre("");
    setSelectedZone("");
    setSelectedDistrict("");
    setOpenCentres(new Set());
    setOpenZones(new Set());
    setShowDropdown(true); // reopen dropdown
  };

  const cancelZone = () => {
    setSelectedZone("");
    setSelectedDistrict("");
    setShowDropdown(true); // reopen dropdown
    if (selectedCentre) setOpenCentres(new Set([selectedCentre])); // reopen its centre
  };

  const cancelDistrict = () => {
    setSelectedDistrict("");
    setShowDropdown(true);
    if (selectedCentre) setOpenCentres(new Set([selectedCentre]));
    if (selectedZone) setOpenZones(new Set([selectedZone]));
  };

  return (
    <div className={styles.container}>
      {/* Selection Boxes */}
     {/* Selection Boxes */}
<div className={styles.boxContainer}>
  {selectedCentre && (
    <div className={styles.box}>
      <span>{selectedCentre}</span>
      <X size={16} className={styles.cancelIcon} onClick={cancelCentre} />
    </div>
  )}

  {selectedZone && (
    <div className={styles.box}>
      <span>{selectedZone}</span>
      <X size={16} className={styles.cancelIcon} onClick={cancelZone} />
    </div>
  )}

  {selectedDistrict && (
    <div className={styles.box}>
      <span>{selectedDistrict}</span>
      <X size={16} className={styles.cancelIcon} onClick={cancelDistrict} />
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
        <li key={centre.name} className={styles.centreItem}>
          <div
            className={styles.centreName}
            onClick={() => {
              setSelectedCentre(centre.name);
              setSelectedZone("");
              setSelectedDistrict("");
              toggleCentre(centre.name);
            }}
          >
            {centre.name}
            {openCentres.has(centre.name) ? (
              <ChevronUp size={14} className={styles.arrowIcon} />
            ) : (
              <ChevronDown size={14} className={styles.arrowIcon} />
            )}
          </div>

          {openCentres.has(centre.name) && (
            <ul className={styles.zoneList}>
              {centre.zones.map((zone) => (
                <li key={zone.name} className={styles.zoneItem}>
                  <div
                    className={styles.zoneName}
                    onClick={() => {
                      setSelectedZone(zone.name);
                      setSelectedDistrict("");
                      toggleZone(zone.name);
                    }}
                  >
                    {zone.name}
                    {openZones.has(zone.name) ? (
                      <ChevronUp size={12} className={styles.arrowIcon} />
                    ) : (
                      <ChevronDown size={12} className={styles.arrowIcon} />
                    )}
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
