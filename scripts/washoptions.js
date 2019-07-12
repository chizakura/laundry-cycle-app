const washData = {
    "options": [
        {
            name: "wh-washing",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "any",
            canWash: true,
            about: "Garment may be laundered through the use of hottest available water, detergent or soap, agitation, and a machine designed for this purpose."
        },
        {
            name: "wh-washing-hand",
            type: "hand wash",
            cycle: "none",
            waterTemp: "any",
            canWash: true,
            about: "Garment may be laundered through the use of water, detergent or soap and gentle hand manipulation."
        },
        {
            name: "wh-washing-30deg",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "cold",
            canWash: true,
            about: "Initial water temperature should not exceed 30C or 65 to 85F."
        },
        {
            name: "wh-washing-30deg-permanent-press",
            type: "machine wash",
            cycle: "permanent press",
            waterTemp: "cold",
            canWash: true,
            about: "Garment may be machine laundered only on the setting designed to preserve Permanent Press with cool down or cold rinse prior to reduced spin."
        },
        {
            name: "wh-washing-30deg-extra-care",
            type: "machine wash",
            cycle: "gentle",
            waterTemp: "cold",
            canWash: true,
            about: 'Garment may be machine laundered only on the setting designed for gentle agitation and/or reduced time for delicate items.'
        },
        {
            name: "wh-washing-30deg-alt",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "cold",
            canWash: true,
            about: "Initial water temperature should not exceed 30C or 65 to 85F."
        },
        {
            name: "wh-washing-30deg-permanent-press-alt",
            type: "machine wash",
            cycle: "permanent press",
            waterTemp: "cold",
            canWash: true,
            about: "Garment may be machine laundered only on the setting designed to preserve Permanent Press with cool down or cold rinse prior to reduced spin."
        },
        {
            name: "wh-washing-30deg-extra-care-alt",
            type: "machine wash",
            cycle: "gentle",
            waterTemp: "cold",
            canWash: true,
            about: 'Garment may be machine laundered only on the setting designed for gentle agitation and/or reduced time for delicate items.'
        },
        {
            name: "wh-washing-hand-30deg",
            type: "hand wash",
            cycle: "none",
            waterTemp: "cold",
            canWash: true,
            about: "Garment may be laundered through the use of water, detergent or soap and gentle hand manipulation."
        },
        {
            name: "wh-washing-40deg",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "warm",
            canWash: true,
            about: "Initial water temperature should not exceed 40C or 105F."
        },
        {
            name: "wh-washing-40deg-permanent-press",
            type: "machine wash",
            cycle: "permanent press",
            waterTemp: "warm",
            canWash: true,
            about: "Garment may be machine laundered only on the setting designed to preserve Permanent Press with cool down or cold rinse prior to reduced spin."
        },
        {
            name: "wh-washing-40deg-extra-care",
            type: "machine wash",
            cycle: "gentle",
            waterTemp: "warm",
            canWash: true,
            about: 'Garment may be machine laundered only on the setting designed for gentle agitation and/or reduced time for delicate items.'
        },
        {
            name: "wh-washing-40deg-alt",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "warm",
            canWash: true,
            about: "Initial water temperature should not exceed 40C or 105F."
        },
        {
            name: "wh-washing-40deg-permanent-press-alt",
            type: "machine wash",
            cycle: "permanent press",
            waterTemp: "warm",
            canWash: true,
            about: "Garment may be machine laundered only on the setting designed to preserve Permanent Press with cool down or cold rinse prior to reduced spin."
        },
        {
            name: "wh-washing-40deg-extra-care-alt",
            type: "machine wash",
            cycle: "gentle",
            waterTemp: "warm",
            canWash: true,
            about: 'Garment may be machine laundered only on the setting designed for gentle agitation and/or reduced time for delicate items.'
        },
        {
            name: "wh-washing-hand-40deg",
            type: "hand wash",
            cycle: "none",
            waterTemp: "warm",
            canWash: true,
            about: "Garment may be laundered through the use of water, detergent or soap and gentle hand manipulation."
        },
        {
            name: "wh-washing-50deg",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "hot",
            canWash: true,
            about: "Initial water temperature should not exceed 50C or 120F."
        },
        {
            name: "wh-washing-50deg-permanent-press",
            type: "machine wash",
            cycle: "permanent press",
            waterTemp: "hot",
            canWash: true,
            about: "Garment may be machine laundered only on the setting designed to preserve Permanent Press with cool down or cold rinse prior to reduced spin."
        },
        {
            name: "wh-washing-50deg-alt",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "hot",
            canWash: true,
            about: "Initial water temperature should not exceed 50C or 120F."
        },
        {
            name: "wh-washing-50deg-permanent-press-alt",
            type: "machine wash",
            cycle: "permanent press",
            waterTemp: "hot",
            canWash: true,
            about: "Garment may be machine laundered only on the setting designed to preserve Permanent Press with cool down or cold rinse prior to reduced spin."
        },
        {
            name: "wh-washing-60deg",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "hot",
            canWash: true,
            about: "Initial water temperature should not exceed 60C or 140F."
        },
        {
            name: "wh-washing-60deg-permanent-press",
            type: "machine wash",
            cycle: "permanent press",
            waterTemp: "hot",
            canWash: true,
            about: "Garment may be machine laundered only on the setting designed to preserve Permanent Press with cool down or cold rinse prior to reduced spin."
        },
        {
            name: "wh-washing-60deg-alt",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "hot",
            canWash: true,
            about: "Initial water temperature should not exceed 60C or 140F."
        },
        {
            name: "wh-washing-60deg-permanent-press-alt",
            type: "machine wash",
            cycle: "permanent press",
            waterTemp: "hot",
            canWash: true,
            about: "Garment may be machine laundered only on the setting designed to preserve Permanent Press with cool down or cold rinse prior to reduced spin."
        },
        {
            name: "wh-washing-70deg",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "hot",
            canWash: true,
            about: "Initial water temperature should not exceed 70C or 160F."
        },
        {
            name: "wh-washing-70deg-alt",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "hot",
            canWash: true,
            about: "Initial water temperature should not exceed 70C or 160F."
        },
        {
            name: "wh-washing-90deg",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "hot",
            canWash: true,
            about: "Initial water temperature should not exceed 95C or 200F."
        },
        {
            name: "wh-washing-95deg-permanent-press",
            type: "machine wash",
            cycle: "permanent press",
            waterTemp: "hot",
            canWash: true,
            about: "Garment may be machine laundered only on the setting designed to preserve Permanent Press with cool down or cold rinse prior to reduced spin."
        },
        {
            name: "wh-washing-95deg-alt",
            type: "machine wash",
            cycle: "normal",
            waterTemp: "hot",
            canWash: true,
            about: "Initial water temperature should not exceed 95C or 200F."
        },
        {
            name: "wh-washing-95deg-permanent-press-alt",
            type: "machine wash",
            cycle: "permanent press",
            waterTemp: "hot",
            canWash: true,
            about: "Garment may be machine laundered only on the setting designed to preserve Permanent Press with cool down or cold rinse prior to reduced spin."
        },
        {
            name: "wh-washing-not-allowed",
            type: "none",
            cycle: "none",
            waterTemp: "none",
            canWash: false,
            about: "Garment may not be safely laundered by any process. Normally accompanied by Dry Clean instructions."
        }
    ]
}

module.exports = {
    washData
}