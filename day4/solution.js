const fsPromises = require('fs').promises;
const inputText = `MMMSAMXAMMXSXXMAXAXXXSASAMXSAMXSAMXMAXSAMXSXSMSASAMXXXSASXSMSSSSXMAMSAXMSSXXASASMASXAXXMSMSSMMMSAMXMMMMXMXSXXMSXMAXXMAMXMSSXXMAMMMSMMMMMSXAX
XAAXAMXMASXMASMSSSXSASASAMXMXMAMXMAMXASXAXMAXAMXSAMSMMSAMASAAAAAMXMASMMMMMMSMMASAXAMMMSMSMAAAASMMXSMSMSASMAASXMASMMSXMASASASXMASXMASAAASMMAM
SMMSAMAMMAMXAMAMAAAMAMXSMMAXAMMSXSAMXASMSAMAMAMASXMASASAMAMXMMMMAXMAMAAAAAAAMMMMXMSAAXMASMMSMMSAMXSXAASASAMXMASXMAASAMAXMXMAXSASASASXSXXXAMA
XAAMAXMASASMSSXMMMMMAMAMASMSMSAAAXASMAMAMMXMXAMXMAMASXSAMXMASXSXSXMASXMSSSSMMAASAMXSMSMAMAMXMXXAMASMMXMMMXMASXMAMMMSAMXSXSMMMSASAMASAMASMSAS
MMMMMMMASASAMXMXMSMMAMAXAMMAAMMSSMAMMSMSXSAMXSSMSSMASMSXMAMXMASAMAMXMMAXAXXXSSSSMXMASMMASAMMMMSAMASXXAAAAASAMAXXMAXSXMAMMXAAAMMMXMAMAMAMAMMM
SASASAAMMAMXMASXMAMSASXSSSSMSMMAAMAMAXAXMMASAMAMAXMSMAXMSASMMMMXSAMAMMMMMMXMXMAXXSAMXXSASASXAMSAMXSXSXSMSXMMSSMSSSXSASMSMSSMSSXAXMXSSMAMSMXX
MASASASMMMXAMXAXSMMSMSAAAMXAMXXMMSAMXSXXASAMASAMAMMAMMMASXXAMMAAMXSXSASASASMAMXMXMAMMXMASAMMAXMASXMAXAAAMAXAAAAAAXAMAMXAAAXMAXMASXAAXAXMMXSX
MAMAMMXXAMSXSAMMXMASMMMMMMMMMMMXXMAXMAMSMMXSMMXMSSSMXAAMMXSSMMMSXMXMXMSASASMASAMASAMXAMMMMMASMMASMMAMSMMMAMSSMMMSMMMSMSMMMSMXSMSMMMMMMAMXASA
MXSXMAMSAXXMXAMASMASXSXMAMAMAMXMASMMXAMSAMXSAMXXAAXXMSSXXXXMAXAAMMXSMAMMMXMXAMASASMSSMMAAAXSMAMASAMAMXAXMXXXAXAXAAXXAAMXSAXAXMXAXAMMSMAXMAMA
MAMAMAXSXXAMSSMAXMMSAMASXSASXXSAMXAMMSXSAMMMMMAMMSMSAMXAMSAMXMASASAMMMMAXASMSSMMASXAASASXMXMMMMASXXXXXSMSXMSXMSSSSMSMSMAXMASASXMSXMAASMMMAMM
MMSSMMMXSXXXAXMSMMAMASAMMMMSAAXXXXSMAXAMAMAAAAAAAXAXXMMMMSAMSSMAXAAMXMSMSAXMXAXMSMMMSMMMASASASMXSMMSAAMAMMMSXMAXMAXXXAMXSMXMXMAXAAMSMMSXSMSS
XAAXAXMAMSAMMXMXAMXMAMASXAAMMMMXMAXMMMMXMMSSXSASMMAMXSAMMMAMAAXMASMMXXAMMXMMSSMMAMAMXAXSMMXSAMASXMASMSMXMAXMASMMSAMSSMSAMXAMASMMMSMXAASMMAAA
XMXSMMMAMAXASASMSMSMXSAMMMSSMXMXMAXASMSAXMAXAMAMXSMMASMSMSMMSMMXMXMAMMSSMMSAAMXSAXAMMAMXXSAMAMXSAMXSXXXMSMMAMXMAXXAAAASMMSASXSXXMMAMMXMAMMMM
MMMMMASXMXSXSASAAAXAAMASXMAMAAMAMMSXSASMSMMSSXXAAMAMXSXAXMAAMXSAMASAXAMAAAAMMMASMSSSMAXXAMXSAMXSAMAXMMAXAAMSMSMSSMSMMMMAMSXXMMMMAMAMXAXXMXMS
XAAXMASAMMXAMXMXMMMMMSXMMSAXSASXSXMMMAMXMAAMMSAMXSXMASXMSSMMSASASASASXSSMMSMXMASXAAMMSMMMSMXASASAMMSASMMMSMAAXAMXAAXAAMAMMMMXAAXXMSAXMSXMAMA
SSSSMMXAMXMXMAMXSMXMAMAXXXAXMXSASAAXMAMAXMMSASMMMAMXAMAXAAAAMMSMMAMAMMAXSMAMXMAXMMSMAMXSAAASXMASAMMXAXXAXAMMSMXMMMMXXXSXMAAAMXSSSXXAASAMMSSM
MAMXMXMMMMAXMMXAXXXMASAMMMSMSAMASMMMSAMMXSAMASXSXSXMASMMSSMMSMSAMXMMMMSMMMMSXMAXSMMMXMAXMAXMMMAMAMSMMMSXSMXSAXAASASXSMAMSSMSSXAXXAMXMMASXAAX
SAMASMSAAASMMXMSSSSSMXAAXAAXAXMMMAMASXMSAMASAXAXXXSMAAAAAAXXAAXMMSXMAAAASXMMMMMMSAXAAMMMSSSXSMMXMMSASAMXAMXAAXMAMXMAAMXMAXMAMMMMMMMXXMAMMSMM
SAMAXAMMSMAAMMSMAMXAMSSMMSSSMSSXSXMXSMAMSSMMMMSMMMXMASMMMAMSMSMXAMASMSSSMAAMMMSASXMMSSMAMAAASMXAAMSAMASMSSSMMMMSMMMSMMSMMXSASASAMASXXXASMMXS
SMMSXSXXAXSAMXAMAMSAMXMAMXMAXAXXMAMAXMAAXMXAAAAAAXMAXMXXMXMXAMMMASXMAMMXXSMMAAMASXXAAMMAMMMMMASXSMXAMAXAAAXXSAMXASAAASXXXXMASASXSASAMMMSASAM
XMAXSMXMAXMAMSASAMXASMSSSSSSMMSSMSMMXSMSMMSXMSSSMSSMSSSXMAXMMMMXAMMMSMAAXXXSMSSMMMMMSXSXSAAAMXMAAAXXMXMMMMMMSASMMMSXSAMSMXMMMAMAMMSXMASMXMAM
MMXXAXAXXASAMSAMXMSMMAMAAAAXAAAAAMAXXXXMAMASAMXXXAAXAXMAXAXSAMAMMSMAMMMMSMXMAMXMAASAMMSMSXSSSMMSMMSMMXMAAMSXSXMASMMXMAMXMAXAMAMAMMSASXSAMSAM
SSMSSMMMMMXMMSAMSAMXMAMMSMMMMMSSMSAMMXMSSMMAMMMMMXSMSSSSMASMAMXSAAMASAAXMMAMSMXMSMMAMAXASAXAMAMXAXXAAMSSSMSAMMSSMAMMSMSMSMSXSASASMXASAMXAMAM
XAAAAAAAXXSSXSAMXMAXSXXAAMMAMXAXXXAMASXMASMXMASASXMAXAAMMXMMXMASMXMSSXMSSMXSAAXMMXSAMXSSSMMMMSMSMMSSMXXAMXMXMASAMAMAAXAAMAAASASASMMMMMMSSSSM
SMMXXSMXSAMXAMXMAMXMAXMXSXXASAMXMSSMAXAXSAMSSMXMXAMXMMMXMSMXSAMXXSXXXXXAAXSAMSMSAMSXMMXAXXAAAAAAAAAAXMMAXMSAMXSAMAMSSMMSMMMXMXMMMXAAAXMAAAXM
AXMSAAAAMAMMXMAMASASXSSMAMMMXXXAMAAMAMSMMAXAAAMSSMMMXAAMMXAASMSMAMMSXSMSSMSAMXMMAMMASMMMMXMMMSMSMMSSMXSXMAXXXASAMXMAMASMMAXXMSAMXSSMSSMXMXMX
AMAAMMMSMSMMASMXXSASAAXMAMXSSMMSSSSMMSMASXMSMMMMAXAXSSMSAMMMMAAAAAAXAAXXAMXAMXSSSMSAMXAMASXSAMXAAAXXXXXAMSSSMASMMSSMSMMASMSMMASMXXXAMXMAXSXM
SXMMXMAXAMXSMAMSAMXMMMMMASAMAAMAAAXMXAMXMXAXXSAMXMMXAAAXMAMAMSMSSSSMSMSSSMSAMXAAAAMAXSXMMMAMAMSXMMSMSMSAMAAXMAMAMAAASXSMMMAAMAMMXAMXMAMMXXAM
AAXXSXAMMMXSMAAMAMASAXMAXMAMSMMMMMMSSMMMAMSMASMSAMXMMMMMXMASMMAAAXAAXXAAAXXAMMMSMMMXMAXSMSXMAMAMSAMAXAAXMMSMMMSAMMSMMAXXASMSMXSXMXMSSMSSMSAM
MSAMAMASAMXXMXXMSMASASXSXSXMXXSAAAAXXSXMASMMAMASXSXXAASXSAMXAMMMSMMSMMMXMMXMXSXXMAXXAMMXAAAXXMSXMAMXMMMXSXMAXAMAMAAXMSMSMMAXXMMAMXAAXSAAASMM
XMAXMMAXAMMASXSSMMXSMMMMASAMXASMXMMSASXSXSXMASAMMMMMXXSAMXSMMXAMAXXAAAAASMMSAMAMSXSAMXAMSMSAAAXXMSMAAAMMMASMMSSSMSMXMAAAXMASXAXAMAMMSMMSMMMS
MSMMXMMMXMAAMAXMASAMXAXMAMAAMMMSXSAMXMASAMMSXSAMAXAASMMXMAXASMXSASXSSMSSXAXMAMSMMASXXMXMMAXMMMMMMXAXSAXAMXMMAXAMAMAASMSMXMMSXMMAMXXXMAAXMXXX
XAAXSASAAXSSMSMSXMXSMMXSASXMXAAXXMAXAMXMAMASMSASMSXXAAMSSMSXMAMMMMMAMMMMMSMMAMXAMAMMXMMXMAMXSAMAMMAMXMSMMAXMAMSMAMSMMAAAAXAMXMAXXMASXMMSMSSS
SSXMSAASXXAMAXAXMMMAXAAXXSASAMXMXXMXSMMSSMMXAXAMAAXASXMAAXMMMAMASAMAMAASMMAMAMSXMAMSASASMXMASXSAXXXMXMAXSXSXAMXMMXXMMSMSMSASMMSXAXAXAASXAAAX
MMSAMSMMMAMMAMSAAXAAAMXSASAXASAMASMAXAMAXMSMSMMMMMMMMAMSSMMASMSASASMSSMSASMMAXMMXMAMAXMXMAAMSMSMSMMMXSAMMAMXMASAMXMSAAAAAAAXMAMSMMSXMMMAMMSM
XAXMXAXMAMAMXSXMMAMAAAAMAMMMMSASAMMASAMMSXAAAAMXMMAXSAMXMASASXMAXAMMAMXMAMASXXMXAXMMSMMSSMSXMASXAAAMMMMAAAAXMASXMASMSMSMSMXMMSXMMAXAXXXAMXAA
MMSSXMXXSXSXMAXASXSSSSMMXAXMXXXMASMASXMMMMSSMSAMXMMAXAMASMMMMXMAMXMMSXSASMMXAMSXMSXAXAAAAAXMSMMXSXMMXAXMSSMMSASAMXMXXXXXAXSXXXASMAMMMXMAMXMX
SAAMAXMAMXXAMASXMAMAAAXAXSXMASMSMMXXXAXAAAMAMXAXMSMSSXMXSMAASMMASXAXAMMAMAXMMMAASAMMSMMSSMMAAAAAMXSXSASXAAAXMAMXAMXAXMMSASAXXMAMMMSSSXSMSASX
MMSXMMAASMSSMAXAMSMMSMMSXMAXAAAAAXXSAMSMMMSAMXAMAAAXAASAMASMAASASMMMSSMXMXMXSMSXMAMXAAAMAAMSSMMMSASASAAMSSMMMSMSMSMXMAAXMMAMXMSMSXAAAAAASAMA
SXAMMSSXSAAXMASXMMAXAXAXASXMXMSMMSASXXAAXXMASXSSSMMMMMMASAMXSAMXSAXAMXMASMMXXAMMSXMSSSMXSAMXMXAAMAMAMMMAXAXMXXASASASMSMMSMXASXXAXMXSMMMMMAMX
AXMAXAXMMMMMMXSAASMMMMSSMMASXAXASMAMMSSSMSSMMMXAAXXAAXSXMASAMASMSXMXXAXXAAXAMXMAMAMAAAAXXSXAMSSMMXMXMAXMMAAAAMSMAMAXAXXAAMXAAAMMSMMXXAXAXAMX
MMXMMSXMAXXXMXSMXMSAMSMAMMASMAMMMMAMXAAAAMAMSAMSMMSSXMAXMXMMSAMMMAMMSSMSSMMAXSMXSSMMSMMMAMMMXAAASXMMSXSAAASMXSAMXMMMAMMSASMAMAXAAXMASMSSMMSM
XAMXAAMSAMSAMAMXXAMXMAAAXMASAMMAMSAMMMSSMSAMXSAXMAXMMMAMXMSXMMSASXSAAAAXAASMMXAXSAMXXAAMAMAXMSMMMASXAAMASAMAMAMXAAMMSXXMXXXMAMMSSMSAMAAXMMAX
ASAMMSXSAXSAMASXMSMSXMXMSMASAMXAMSASXMAXAMXMMMXMAMXAAXSMMAAMSAXASAMMXMSMSMMAMMMMXAMSMSSSMSSSXXAASAMMMSMAMXMMMAMSSSXAXMASMMXMAMAMXAMMSMMSXSAS
AMSXSXAMMMMXXAMAAAMXASAMXMASAMSSXSMMMMAMMMMMAMASMMMMMMXAASMMMAMMMMMSXAXAXMXAMXAAMMMSAMAAMAXMASXMMAMXXXMAXXXMMMXXXAMASASAAMMSAXSAMXMAAAXAAMAM
XMAMSMXXMASXMSSMSMXSAMASAMMSAMAMMMMAXMXSAAMSASAXAAXXAAMSMMXXSASAAMAMMMMXMMSMMSMMSAAMXMSMMMMXXAMXSAMXMMMSMXAMAMSMXXXMAXXMSMAMMSXAAXMMSMMMSMAM
XSXSXASXMASXAAAAAAAMAMSSXSASAMXSASXSXSASXSMSASASMMSAMSXMAMAMSASMXMASAMAXXMASMAAASMSMAMMMASMMMAXXMXXAAXAXXXXXASASMXMMSXSAXMSMMXXAMXXAMASMXXAM
MXMAXSMAXAXMMMMMMMMXXMXMMMASAMXSASAAAMXXAXASAMAMXAAXXXAMAMAMXMMXXSASMXSAASASMSMMSXAMMMAXAAAMSXMXMASMXMSSMXMSMSAMXAMAXAMMMMAASMMSSSMMXAMAMSSS
AAAMMMSXMSAMXSAMXMSMSXSXAMMMXSAMAMMMMMSMAMAMMMAMMMMMMSMMAMASMSAXXMASAAMSMMASAXMXXXMASXSMSXSMSAMXXMASAMXSAAMAMMXMSXMAMAMXAMSSMAAAAXASMSMSXAXX
MASXAAXXXAAMAMXMASAMSAMSXSAXMMMSMXAXAASMAMXMSXMSMSAMAAXSMSXXAMSSXSXSMMMAXAAMAMXMASMSSXAAAAMASXXAXMASXMASXXSASXSMMXMSSSSSSMXAAMMMSMMMAXAXMSSS
SMXXMSSMXSXMAMASMMXSMAMAMMMSMSAAMMMXMASAMAMMSAAAXMAMSMMAASAMSMXMASAMASMMSMXMAMAXMAXAXMMMMSMAMSXMSXAMAMXSMMXXSMSAASMAXAAAXXSXMXMXXMSMXMAMXAAA
ASASXMAMMMASASAMMMSXXSMMSAAMMMSXSASASAMAMMSASMMMSSMMXXMSMMAMMAAMMMAMAMXMAXASXSSMSXMSSMMAAXMAMMXSAMMSXMXMXSSXMASMMSSMMMMMMMMAMAMXMAAMAMXXMMSM
MMXSASXMASXMMAXXAMXAMMAXSMSSMAMMSASAMAXAMXMMSXSMXAAAXAXMASXMMSSSXSXMASASASMXAAMMMAMAAASMSXSAASMMMMAAAXXMASMAMAMAAMAXAXSASAAAMASAMSMXXXAMAMAX
XMASAMXMXXAAXAMXXMMXMSMMXXMAMASAMAMMSSMASMSXMASMMMMMSSMXAMMAMAMMXMASASXSAXXMMMMAMAMMSMMAMAXXMXAAAMXSSMAASXXAMXMMMSMMMMMASMSXSASXXAMMSXMAXXAX
SMXSMXXMASXMMXSAMXSMMAASXMSXMAMAMXMMAAXSMMMAMAMAAXAXXXAMSMMMMAMXXMAAAMMMMMMXSASMSSSXAAMXMAMSSSMMMMMAMMSMMMSMSXXSXSXMASMXMXXMAMMXMASASASMSMSM
SSMMMMXMAMAAAAMASXAAMMXMAMAMMMMAMXMMSSMXAMMAMASXMSSSMMXMAAAMXSMSMXAMSMSAAAXASMSAAAXXXMMMMXMXAAXAAXMAMAXAXXAAAMAMAMXXAXXSSXAMMSSXSXMASXMASAMS
MAMAAXXMMSSMMXMAMXMSMMMSXMXSASMSSSXAAAASAMXSSMXAMXMAXAASXSMSAMAAASMXMASMSSMMSAMMMMMMXMAXSAMXSMMMMXXAMXMMMSMSMSSMAMMMSSMAAAMSAAAXAMMMMAMAMXMA
SAMSSSMSAAAASAASXSMAXAAAMAXMASAAAXMMSSMMXMAXAXSXMAMSMSMXXAAMAMAMMAXAMAMXMAXAMXMMXMAXAMAXSASMXMXSASXSSSSXAXAAXMASXMAXXAAMSMMMMSSMMXSASMMSSMXM
SXXXAAAMMSSMMAXXAASASMSMMMSMSMMMMMMMAMMSXSXSAMXMSMSAAXAXSMSMSMAXSMSAMMXSMASMAAXMASXSMSSMSXMAXMAMMSAAAAXMMSMSMSMMMXSMXXXXAAXXAXAAXMMAXSAXMAXX
SMSSSMMMAMAAXSSMSMMXSMMAXMAMAAXXXSXMASXXAXAMXMXMASXMMMXMAAXAAXXXSXSXMSAMXAAXSSSMXSAAAAXAMMMSMMASAMMMMMMMXAAAAAXMAXXAMMSSMSSMMSSMMAMSMMMSMSSX
SAAAXXXMASXMMXAMAXMAMASXMSASMSMMASAMSSMMSMMMAXAMXXMAAAMSMMMMMSMASAMAAMMMMMSMMAMMMSAMXMMSMMAXASMSXSSXMXXXXMSMSMSMSSMXSAAAXAMAXAAAMMMXAAXAAASX
MMMSMMXSAXAXSSSMSXSAMAMAMXMMXXAXAMMMMMAAMAMSMSMSASXSMSMXAAAXAXMAMAMXMASMAMAMMAMMAXXXXSAMAMAXAMASXXMAMMMMSMAAMXSXAAMAMXSXMMSSMSXMMASMSMXSMMSS
XMAXAMAMMSMMMAXAXAMXSASMMSMSMSXMMSXXAMSMSAMXMAMMASXAXXXSSMSMMSMMSXMXXSXSASXSMMSXSSMXXMASMMMSMMAMSMSMMASAAMXMMMMMSXMXSAMMMXAXXMMSSMSAAMXMAMXX
SMAXAMAXXAXAMXMMMSMASXSXAASAAASXXAXSMXAAXXMMSMMMMMXSAMXAMAXXSAMMXAXSMXXSMSAAXMAMMAMSSSMMMAXAXMXMXXAASAMXSXSAAXXAAAXXMASAMMXSAMXAAXMXMXAXAMAS
XMSXMMAXSMSXMSASAAMMMXXMMXSMSMAMMMMMMMMSMAXMAAASASXMASXXMMMMSASXSMMMASMSMMXMMMAMSAMAAXMAXXMXMAMXSMSMMASMXASMSMSXSXMAMAMAMXMSAMMSSMSMSMSSSMXS
AXMASMMXSAMXMSAMSMMAAMMSSMMXMXMAAXAAASAMMMMSMSMSASMSXMASMMXAMXMAAXAXSXAXAAMXAXMXSXMMSMSAMSASXMMXXAXMXMMAMAMAMASAAMSXMASXXMASAMAAAASAAAAAAMMM
MSMAMASAMMMAXMAMAMXSAMMAAASXMXXSSSMXMSAMASAXXXAMAMMMASAXAAMXSMMSMSMMMAMSMMSXMXSAMMMSAMXAAXAMAMSSMMMAAXMXMSMXMAMMMMMASAXXAMXSAMMSMMMSMSMSMMAA
SAMXXXMAXXSMSSXMAXMXAMMSMMMAMMMMMMMSMXMXAMXSSMXSAMASMMSXMMMAAMAMAMXSMSMAXMAAMSMMMAXMASMMMMMSAMAAAMASXXAMXAMXMASXMMSXMASXSMXSAMXXASXXXXXXASMS
AXMASMSSMAXAMASXSSMXAMXAMSSMMAAAAAAMXAXMXSXMXMASASXXMAXMSAMMSMASAMSAAASXMMMSMAAAXSMSXXMAAAMAAMSSMSXMMSSMSMSSMAMAMMMSMAMXASAMXMXMASAMMSAMXMAX
SASASAAAMXMASAMXMAMSMMMMSMAAMSSSXMSSSMMSAAAMAMMSAMAAMASMSASAAMXMAXXMSMSXSAAMMMMMMMAAMMSSSSMXXMAXAXAXAAAAMXMXMASXMAASMSXSAMMSAMMXAXASAAXMXMSX
MAMASMMMMXSAMXSXSAMXXAAMAMMMMMMMAXAAAAAMSSMSMSAMMMSXMMSASAMXSSMSSMMXXAXASMXMAXAXAMSMSAMAMMMMXMXMMSMMMSSMSASXSASMSMSMAAXMXAMXASXMMSAMXMXSAAAA
MAMAMXSAAXMXMAXAAAMXSSSSXSMSXSASMMSMSMMXMMAXXMMSXAMAMAMXMXASAAXAMAAAMXMMMSSSMMMMSMXMAXMAMAAMMSSSXSAAAAXXSASXMASAXMAXXMXMMMSMMMMAMMMMSXAMMMMM
MXMAXSMMSSXMASMSMSSMMMAMAMAMAMMMSAXXAMXAAMAMXMXXMMSAMAXAXXXMASMSXXMASMSXMAMAMSMAAAAXAXMAMMXSAAMAAMXSMMSAMAMXMASMSSSSXXXXAAAAAAXSMASAMMSMSXSA
MSSMSSMXMAXXAAAMAMXAAAAMAMXMASXAMXSAMXSXSMSMMSSMMAMXXXXSMXXXXMAXMMXXSASXMAXAMAMSSSMSMSSSMSAMMSMMXMAXAXMAMAMXMASAXAAXMXMSMSSSMXMAXXMAMXXAXAAM
AAASAMXASMMSXMXMXMSSMSXXAXXSAMMXSXSAMXMAXMMAAAMAXSSSXMAMAXSMMMXMASAXMMMMMMSSSMXAXAAXAAAAXMASXAAXXMAXAXXXMASASMMMMMMMMAMMMAMXMAMXMSSSMAMXMMMX
XSXMXMSASAMMXMMSAAAAXAASXMMMSXSXMASAMXMASAXMMSXSMXAAAMSMSMSAMXMSAMXXMSMAMAMMAMMSSMMMMMSMXSMMMSSMXMMMMSMSSMSASXASXMXXMAXAXXMASXSMMAAXASAMXMSM
MMAMXMMAXAAMXSASMMMSMMMMSAAAMXSAMASAMXMASMMXSAXMAMMMMMMAMXSSMXMMMSAMSAMSMAMSAMMAXXAAXXAXAXASAMXMXAAASAMAAAMAMXMMMSXMSSSMSSMXAMMAMMSMMMXXXMMS
ASAMAXMMSSMSAMXSXMSXAXMASMMMXASXMASASMMXSAAMAMAMSASASMXXSMMAMXSMSMMMSASXSXXSASMMXSSSSMSXMSMMASAMSMMMSASMMMMMMXXAXMAMAXAMAXMMSASAMXAAASMSMMAX
XSASMSXAAMXMASAMAXMSSMMXSXSXMXMMMASAMXSASMMSMXMSMMSASXAAXASAMAMXMASASXMAAMXSAMXXXXAAAXXAMAXMASXMASMASMMAXXAXMASMXSAMASMMSSXAXXSASMSSMSAAXMAS
ASAMXXMMSSXSAMASXMMAMXXXMASAMXAXMAMMMAMASAAMXMXAMXMMMMMMSMMSMASMSXMASAMXMMAMAMXXAXMXMMSXMASMXMASASMAMXSMMXMMSMMMAMAMMSAAXXMMSASAMXAAAMXMSMAS
XXAMXAAAXXXXXMXMXAMASMSMXMSAMMMMMAMAMASASMMSASMXSAXAAAAAXAAXSMSASXSASXMAXMSSMMSMMXSASXMASXSXASAMXSMXSASASMSAMAAMMSSMSXMASXSAMMMXMMSMMMAXXMAS
ASMMMSSSMXMAMMSAMMMAXMAMXXXAMMXAXAXMAAAASAASAXXAMMSSSSSSMMMMMXSMMAMXSASXSXMAMMAMXXSASASXMMMXXXMAXSAXMASASAMXMXMSXAMXMAMXSAMASXMASAXMASMSXMAS
MMAAAXAMAAMASAMASXMSXSASXMXXMASASXSXSXSASXMMAMSSSMAAAAMAMXXSXASAMXMASMMSMXSXMXMMSAMXMAXMAAAXMAMSAMXXSASMMMMSMXMSMXMAMAMAMXMAMASAMXMMAXMAXMMS
XSSMMMAMSMSAXXXAMXAAASASMXAASMSAAMAMXAMMMMXMAMAAAMMMMMMASAAMMMSXMAMASXXMXMMXMAMASAMSMAMSSMMSAMXMMMMMMASXAXMASAAXAASXSXMASAMAMXMASASMSSMXMAMX
AXAMSSMMAXMMMSMXSMMMXMAMAASMMAMXMSSSMMMAAAMMSMMXMMXASXSASMAXAMXXXASXXMXMAMMSSSMASXMMMXMAMMMMAMAXAAAAMXMXXXSASMSMMMXMAXSASMSSSXSAMMSAAAMSSSXS
SSSMAAAMXMSAAMMMXASMAMXMSMMAMXMSXMAAAASXMSXMAAXSMXMXXAMXSXAMMMMMSASXAMSSSSXAAAMAMMMAMXMAMSAMASXSSSSSXMASXXMAMAMXXXXMXMMASXAXMMMAXXMMMSMAAXAX
MAMMSSMXSASMXSAMSAMXAXXMMSMXMASXAMXMMMMAXAASMMMAMSMSMAMASMMMSAAXMMMMMMAAXAMMSMMASAMAXXMAMXAXXSAAAAAMXSASXSMSMMXSAMXSSSXAMMSSMMSMMMMXXMMMMMMM
MXMAXAAAMAMAMSAMMAMSXSASAAXAMXSAXMXSASXSMSXMASAMXSAMXXMASAAAXMSMSXMASXMSMMAXXXSXSMSSSSMSXSSMAMMMMMMMAMAMAMAAXXAXAMXXAMMMMXAAAAAASMSAMMMSMAAM
MAMSSMMMMAMXMMASXXMAASAMSMSMMAMAMMXSASAMXMASXMSXAMMMMMMXMMMMMXMAXXSASMMMXASXMXMASAAAAAAAMAMMMXSAAAAMAMMMMMSMSMXSMMSMSMAMMMSSMMXMSASASAAASMMS
SAMAAXXXSMSAXMAMMAMXMMMMAXAXAASAMXAMXMAMXSXMASMXMXAAAAMMSXAASXMMMMMAXAAAAMMAMXMAMMMMMMMMXMXMXASXSSSSSSMSAAAAXXMAMXXAAMMXSAXXMMSMMAMXMMSMSMAM
SSSXSMSXMASMXMASMXMASAXSSSMSSXMASXXSASAMXMASMMAASMSSSXSAAMSXSAMSAMMSMSMMSXSAMAMASMSXSXMSAMAMMMSAMXAAAAASMSMSXXAMXAMSMSAAMXMAXXAMMMMAMXXAMMAX
SASAAAXSMASAXSAMAASXXXMXAAAAMMSSMMMMASAXAMAMAMMMMAAMMAMASXMAMXMMAXXXAXAAMMSXSXSAXMXAXAASASASAAMAMMSSSMMMAXMMMXSAMXXXAMMSSSMSSSMMAAXAXAMAMSMS
SAMSMMMXMAMMXMASXMMXSSSMSMMMSAXAAAAMMMMMSMASAMASMMMSSXMXXXMAMAMXSMSMMMMMSAMMMMMXSMMSMMMSXMASMXMAMXAAAXXMMMSAAAXMAMMMSMXMAMAMXAXSSSSXSASXMAAX
MAMXXXXAMMSSMSAMAXASAMXAXMXXMASMSMSSMASXXXXXAXASAXSAAASXMXSMSMSAAAXAAAAXMXMAAAXAAXAAAXAMAMXMMMMAMXMSMMSASASMSSXMMASAMMAMXSSMSAMAAAAASXMASMSM
SSMSSSSXSMAAXMMSAMXMSXMSMMSMMAAAMAMXMAMMSMMSSMASXMMMMMMASMSAAAMMSXSXMSSSXAXSXSSSMSXXSMSSMMXSAMXSMAXAXXXAMXMMAMASAMMASMXXAMAMSASMMMMMMASAMMMA
AAAAAAAAMMMSASXMMSXAXMMMAASAMXSMMASMMXSAAAMAXMAMXXMAXASMMAMMMSMAMMMAXAMAXMMMAMXMASXMMAXAXAAMMSAXMASXSSMXMSXMASAMAXMXMAXMAXAMSXMAXXMXSXMMXXXX
SMMMMMMSMXMXASAMAMMSMAXSMMSAMAMXSASASMSXSSMASMAMMMSMMAMASXMSXXMAMASMMMXMMMAMAMAMAMAXSXSXMMMSAMMSXAXMAXAAMMAMAMASXMSASMSSMSXXXMXMMMSAMXMSMSMM
MMMMXXXMAMAMAMXMASXXSSMAMMSAMXSAMASXXAMAMXMAMMASAXAMXSSMMAMXMXMASXMMASAMAXAMSSMMASXMMMSASXAMASASMSMMSMSSSSSMASAMAXMASXMAMAMSAMSAMXMAXAMAMAAS
XMASXMMMSMAMSMXSXSAMAMXMSAMXSXMAMXMXMSMMMAMSMMXMMMASAAAXSXMAMAMXSAASASAMSSMMMAASAMXAAMXAMMMSAMMMAMXAAAXAAAAXXMAMMMMMMMMAMAXSAMXMASXSMMSASXSM
MMASAAAAAMAMAMMAMMMMMMMXMMSAMXMMSAAMAAAASXMXASMSXSAMMSMMMMSXSAMMMXMMAXAMMAXAMXMMAMSSMSMSMMXSXMXMAMSXMSMMMMMMSSSMMXSAASMMSMXSXMASXSAMXXAAXMAM
XMXMMMMXSMMSSXMAAAXSXMMAAXMASMAASMSASXXMMMXSSMAAMAXAXAXAXMAMMASMSAMXSSSXSAMSSMXSAMAMMSAMASAXMMAMAXMSMXMXSAMXXAXXMASXMMAAAXASMSAMMMMMMMMSMMSS
XXMMSMSAMAMXMASXSMMSAMSSSSSMMMMXXXMMAMXMSMAMAMXMMMSXXSMXMASXSXSMSASAAXMAMMMXAXASAMXSASASAMMSASXSXSMAMAMAMAMSMSMSMASMSSXMMMASAMXMAXMASAAMAXAS
MMXAAAMASXMSSMMAXMASAMAAXAASXMSMMMSSXSAAAMSSXMAMAXMAXMXSXXXAAAXASAMMXAMMMAMSAMXSXMSMAMAMXXAMXXXMASXMSASASAMAAAAAMMSMASAAXMAMMMSSSMSASMXSAMMS
AAMSSMMMMMXXAMXXMMMMAMMSMSAMXSAAASMSASMMMXAAMSMXMAMXAMAMXMMMMMMMMAXMXMAMSAMMSMAMAXAMXMSMMMSSMSXMXMAXMXMASMSMSMMMSAXMASMMXMAMXMAAMXMASAAMXXXS
MXMMAMXXMASMSMMAAASXMMXXAMAMXSMSMSAMMMXMMMMXXAAASXSMSMAMAMAMAMXXSMMSAMMASMSAASMXSAMXMAXAAAMAMXAMASAMXXMASAAAAAASMXSMMSASXSASAMMSMMXAMMMSMMAS
XMASMMAMXAXXMAXXSMXAXSMSMSASAMXAAMAMXXMASXMMXMMMXAXAAXMMAXSXSSSMSXASAXAMXAMAMAXAXMMAMMSXMSSXMSXMASASAMXAMXMSMSMSAMXAAXASASASXSAXAXMMSAMXXXAX
SXMXXXXAAMSMSSMMMASXMSAAASAMASXMMMAMXXMMAAAAMSSSMAMSMSMSMSMAMAMASMMSAMSXMXMMMXMASXSXSAAASAXAXMASMSAMAXMASXMAMXMMMMXXSMAMAMASMMMSMMSMAMSMMMSS
SAMXSMSMASXAAMASMAMXAMMMMMAMMMMAASMMMSXXMAMXSAAAXSMXXXAAXAMXMAMMMAXMAMXASXMXSXAAAAXAMASXMAMMMSAMMSXMAMMSMMSMSMMAAAMMMAMXXMAMAAAAXAAXMXSAMAAX
SAMAXAASXAMXMXXMMSMMXMAXAMAMXAMMMSAAAXAMSMXSMMSMMAAXSSSSXMMMXMMXSSMSSMSXMASXMASMMSMSMMMXMAMMAMXSMSMMXSXAXAAXXASMMSAAXSMXXMXSSMSSMSSSMAMAMSSM
SAMXMSMSXMSSSMMSAMXSSSSSSSMXMMXSXSXMMSXMASMMMMMAXMMMMAAMXSAMAXAXXXXAXXSASMMAXAXAAXXXAMSAMASMASAXAMMSASXMMSSSSXMXMAXMSAMXSAMXAAXXAAXXMASXMAXX
SXSAAMAMXXAAAAAMASMMAAXAMXXAASASXSASAXAMXXMASASAMXAAMMMMASASASMMMMMMMASAMXMXMASMMMMSMMMAMAAXAMMMMMAMMMAXAAMAMAXMAXSMSASMMASXSMMMXAMXSASAMAMX
XASMSMAMSMMSMMMSAMAMSMMSMASXSMASASAMMASMXMSAMMSAMSSSSSSMXSAMXMAAAXAASAMAMXXAMXXAAMXSXAMAMXSMMSXSXMXSAXAMMXXAMXSAMXSASASASAMAMXMAXMMMMAXAMSSS
MMMXAMAMAAXXAXXMXSXMXAAXMASMAMSMMMAMMAXXXXMASXSMMXAXAAMSAMXSASMSMXSAMXMAMSMXSXSSMSAMXMXXMMAXMAXMASMSXSSXSSSSXMAXASMAMAMMMAXAMSMXMAAAMMMSMMAM
XAASXMMXSSMSSMSMMXXMSMMSMAXMAMXAXXXMMSMMMMMXMAXAXMMMMMMMXSAMMSAAAXXMMSXMASXXAAXAAMASMMXSAMMMXSXSAMAXAXAAMXAMXAXMMAMXMMMXSAMMMSAASXSMSAAXASMS
XXXSMASAMAAAXMAAMXXXAMXSMMSSMSSMMSSMAMAXMASMSXSXMMXXXSAMAMXSSMMMMMXMASAMAMMMMSMMMSXMAAASAMXSAXAMXSSMMMMAMMMMMSMSASXMXXXAMASXAMMMSAAASMMSAMAS
SMMMMAMASMMMSXSMMAMSASAXMAMAAAXAAAXMAMXMAMSAAXSAMMAMXXAXSAMXXAAMMSMMASXMMXAAAAAXAMASMMMSXMXMASXMASAMAAXSSXSAAAASAMXAMMMXSAMMAMAAMXMMMMXMAMSM
XMAXMXSAMMSAMXAMMSXSAMASMXSMMXSMMSSMSMSAXXMMMMSAMAAXMSMMXAAXMSMSAAASXSXSSXSMSSSMMSAMAMAMMAMMMMXMXXAXSSSMAASMSSMMAMXMASMMMASMAXMSSXSAAXXSSMMM
XSMSAMMMMAMASAMXAXMXAMXXAAXAMAXXAMAAAAXMSXSASASAMXSSMAAMSMMXMAXMMSMMAXMAMAAAAAAAAMMSAMAXMAMXMMMSMSSMMXMMMMMMMMMXMASMSAMASAXXMSSMMMSSMXAXAASM
XAAMXXAAMMSMXMSMMSXSASAXXXMAMASMMSMMMSMAAAXAMASMMXMAMSSMSAASXMMAXMMMAMXSMMMMMSMMMMXSASMMSAXASAAMMAAAMAMXAAXAMAAASMMMXASMSAMSMMMAAAMAMSSSXMMS
MMXMMSSMMXAMAXXXXAMSAMMMSSSSXMXAXXXXMMXMMSMAMAMAMMSAMXAASXMMAMSMSMASAMAXAMXXMXASXMXSMMAASASAMMSSMMMMMSXMXMSMSMSXXAAXXAMXMAMXAASMMSMAMSASXMAM
ASXMXXMASMMSXSMSMSXMMMMAMMAXXXSAMMSXMMAXAXMXSMMXXAMAXSMMMAMSMMAAXMASAMXSAMMSMSXMAMMXAMMMMAAASXMXAMMSAXASMMAAMAMMSSMSSXSAMMMSMMSAMXMMMMAMSMXS
SMAXMXMAMAAXAXAAAMMSAMSSSMAMXXMASAAASXMMMSMAMAMMMXSSMMXMMMAAMSMSMMXSAMAMXMAAMMMSMMASAMXXMSMMMAAMMMAMASAMASXXMAMMAAMAAXSMSMAMXAXAXXXXAMAMAMMM
MSMMSSMASMMMMMSMSMAXAMAAMMAXAMSXMMXXMAAAAAMASAMAXMAMAMASAMSMXAMAAXMSAMMSAMSMSAAAAXXXAMMXMAMXSMMMSMMSASASXMMMSASMSXMXSMSMAMASMASMMSXXASXSASAS
XAXXXAXASXMXSAAXXXMSSMMSMSXSXMAMMXMSMSMMXMXASASXSAMSXMASAMAXSASMSMASAAMMMAXASMSMSMMMSSSSSXSAAXMXAAXMASAMMMAXXAMXAASXXASMSSMMXMXXAAMSMMASAMAS
SSMMSMMXMAXAMSXMMMXAMAXAAXAAMAAMSAMXAMXSASMXSAMAXMXSAMAMXAMMXMMAMXMSMMXMXMMAMXAMMAXXXAXAAASAMXXSXSMMXMMMASMSXMMMSMMAMSMAMMMXXXAMMMXASMMMSMAM
MAAAMXMAXMMMMMSMAAMMSSMMMMMMAMMMXASMAMAMAXXXMAMMMSAMAMAMAMXXMSMAMAXXXAAXAAXMXMMXXAMSMAMXMMMSXMXAAXXMAXAMXXAAAASAXAMXMAMXMAAXMMSSMMSASXMAXXAS
MSMMSASMXMAMAAAMSSXMAMXAAAXAMMSMXAMMXMMMSMMMMAMAAMASXMXXSXSXAAMMSMMMSMMXSSMSAASMMAMMAAAMXMXXMSMMXMASASXSMMSMMMMASMMAMMXSMMMAXAAAAMMAMAMXMSAS
XMAMSASXASASMSMMAMXMASXSSSSSSMAAMSSMMMSAMAMMXAXXMXMMMMMMAAMMSMSMAMMMSAXXAAAAMMAASMMXMASASXMMAXXAASXMMMMAMAAAAXMAMAMAMXXAAASMSMSSMMMMSSMSMMMX
MMAMMMMXMSASAXXMASMMMSAAAAXAAXMMMAAMXXMAMSASXSSSSXSAAAXMMMMMAAAMAMAASAMASMMSXMSAMAMXMAMXXAAMSMAMXMMMXSSSMSXSMSMMSSSMSSMMSMAAXMAMMMXMMMAAXAXA
MSSMMAAAMMMMAMASAMAAAMMMMMMSMMXSMMSMMMSAMXMXAAAAAASXSAXAAAAXMSMXSMMMSAMMAAAXXXMASXMXMAXAMMMMAAASAAXSAXMAXXAXXMAXAAAMAXAXAXMMMMASXMAAAMXMSMSM
MAXASMSXSAMSASMMASMMMSAXXXXMASMXMMMMAAASAXXSMMMMMMMXMXSXSSSSMXMXXASAMASXSMMMAXAAMXMAMXSSMMSSXMXSMSMMXSMMMMMMASMMMSMMXMSSMXXMAXXSAXSMMXSXXXAM
MASXMAXXSAMSASXSASXMASXXXMAMSMMASAMXMAXMXSASASXMXSMMMMSXAMAMXAMMMAMASXMAMSAMXMMMSASAMXAAAAMAMSMMMMAMXMAAMASMXMXAMMXSAAXAXSSSXSAMMMXAMXSMMXXX
MAMAMMMAMSMMAMAMXSAMASMSSMSMXASAXAXSXSXSAMASAMMSAAAXXAMMMMSXXSMAMMMXMAXAMAMXMXAAMXXAMMXMMMSMSAAAMXAMMSSMMASMAMSMSMASMSMAMXAAMMMSXAXAMAXAXSSS
MASMMAMXAMMMSMXMXSAMXSAMMAAAMAMMXSMMXMAMXMAMAMAMSSMMMSSMMAXMAMSSSXMXSSMXSASAMSMSSMMSXSXMMXSXSMSMSSMSXMASMASMMMAMAMXMXXMAMMMMSAAXMSXMMSSSMAAX
SMAASXSMMXAMMXAMXSXMXMAMMSMXMXMXAMAMMMAMSMAMMMMXAMAAAMAAMXMAXXAXAMMAMAAMAAMMAAAXMAAMASMXSAMMSAMAXXXMASAMMXMAMSXMASXSMXSAXXAXMMMSAAASAAAXMMMM
XMXMAAXXMASMSSMSAMSXMSAMXMASMMXMASAMXXAMMXXMAAXMASXMSMXMMASXMMSMMAMAMMMMMXMXSMSMMSXMAMAAMAMAMMMMMMAMXMMSMASAMMMMAMAXAXSXSSSSMASAMMXMASAMXXXX
XMMXMXMMSAXMXAXXMSMXAXMSXMSMMAXMASXMAMXXSASXSMXSAMASMMSAMAXAAAMASMSSSXSXXAAMXMAXAAAXMMMMSXMXSAAASMMSASMMMASASASMSMMMSAMXXXAAMXMAMMAAAXMSMSMM
XMAMSXSAMMSSMMMSMAMMSMAMAMAAXSXMASMMAMXAMMSAAAAMASMMAASAMSSSMMSAMAAAAASASAXSASXMSSSMSAXXMMSMMMXSAAXMASAMMMMAMAMAXMASMAMAMMSMMMSAMXAMXMAAAAAA
XMASAXMASAAXAAAASASAAMAMASMSMMAMASAMASMAMXMMMMMSAMXMMMSXMAAAMAMAMMMMMMMAMAMSASMMAAAASMSAMAAAAASAMXMASMMMAXMSMSMMMXMASAAAMXAMXAMMSAMXSMSMSMSX
SSMSAXSMMMSSSMSMSMSXSSMSASMMMSMMMSXMAXXAMMSAMXXMMSXXSAMXMMSMMASMMSAMXXMMMXMMAMMMMSMMMXSAMSSSMSSSXAASXXXSXSAXAMXSSXMASXSMMSASMXSASXMASMXXMAMA`

const part1 = async () => {

    try{

        
        const lines = inputText.split('\n').map(item => item.split(''))
        // console.log(lines);

        const words = [];

        for(let line = 0; line < 140; line++){
            for(let charNumber = 0; charNumber < 140; charNumber++){

                if(charNumber > 2){
                    words.push(lines[line][charNumber] + lines[line][charNumber - 1] + lines[line][charNumber - 2] + lines[line][charNumber - 3])
                }

                if(charNumber < 137){
                    words.push(lines[line][charNumber] + lines[line][charNumber + 1] + lines[line][charNumber + 2] + lines[line][charNumber + 3])
                }

                if(line > 2){
                    words.push(lines[line][charNumber] + lines[line - 1][charNumber] + lines[line - 2][charNumber] + lines[line - 3][charNumber])
                }

                if( line < 137){
                    words.push(lines[line][charNumber] + lines[line + 1][charNumber] + lines[line + 2][charNumber] + lines[line + 3][charNumber])
                }

                if( line > 2 && charNumber > 2){
                    words.push(lines[line][charNumber] + lines[line - 1][charNumber - 1] + lines[line - 2][charNumber - 2] + lines[line - 3][charNumber - 3])
                }

                if(line < 137 && charNumber < 137){
                    words.push( lines[line][charNumber] + lines[line + 1][charNumber + 1] + lines[line + 2][charNumber + 2] + lines[line + 3][charNumber + 3])
                }

                if(line > 2 && charNumber < 137){
                    words.push( lines[line][charNumber] + lines[line - 1][charNumber + 1] + lines[line - 2][charNumber + 2] + lines[line - 3][charNumber + 3])
                }

                if( line < 137 && charNumber > 2){
                    words.push( lines[line][charNumber] + lines[line + 1][charNumber - 1] + lines[line + 2][charNumber - 2] + lines[line + 3][charNumber -3])
                }
            }

            // console.log(words);
        }

        console.log(words.length);
        const filter = words.filter(item => item === 'XMAS' || item === 'SAMX');

        console.log(filter.length / 2);

        // for(let x = 0; x < 140; x++){

        //     console.log(lines[x])
        //     console.log(x);
        //     process.exit();

        //     for(let y = 0; y < 140; y++){


        //         continue;

        //         const words = [];
        //         if(lines[x][y] === 'X' || lines[x][y] === 'S'){
        //             //check left
        //             if(lines[x - 3][y]){
        //                 words.push(lines[x][y] + lines[x-1][y] + lines[x-2][y] + lines[x-3][y])
        //             }

        //             //check right
        //             if(lines[x + 3][y]){
        //                 words.push(lines[x][y] + lines[x+1][y] + lines[x+2][y] + lines[x+3][y])
        //             }

        //             //check up
        //             if(lines[x][y - 3]){
        //                 words.push(lines[x][y] + lines[x][y-1] + lines[x][y-2] + lines[x][y-3])
        //             }


        //             //check down
        //             if(lines[x][y + 3]){
        //                 words.push(lines[x][y] + lines[x][y+1] + lines[x][y+2] + lines[x][y+3])
        //             }

        //             //check NW
        //             if(lines[x -3][y-3]){
        //                 words.push(lines[x][y] + lines[x-1][y-1] + lines[x-2][y-2] + lines[x - 3][y - 3])
        //             }

        //             //check NE
        //             if(lines[x + 3][y - 3]){
        //                 words.push(lines[x][y] + lines[x + 1][y - 1] + lines[x + 2][y - 2] + lines[x + 3][y - 3])
        //             }

        //             //check SE
        //             if(lines[x + 3][y + 3]){
        //                 words.push(lines[x][y] + lines[x + 1][y - 1] + lines[x + 2][y - 2] + lines[x + 3][y -3])
        //             }

        //             //check SW
        //             if(lines[x - 3][y + 3]){
        //                 words.push(lines[x][y] + lines[x - 1][y + 1] + lines[x - 2][y + 2] + lines[x - 3][y + 3])
        //             }

        //             const filter = words.filter(item => item === 'XMAS' || item === 'SAMX')

        //             sum += filter.length;
        //         }
        //     }
        // }

        // console.log(sum);

        // let horozontalLines = new Map();

        // for(let i = 0; i < 140; i++){

        //     for(let ii = 0; ii < lines.length; ii++){
        //         const exists = horozontalLines.get(i);

        //         if(!exists){
        //             horozontalLines.set(i, [lines[ii][i]])
        //         }else{
        //             horozontalLines.set(i, [...exists, lines[ii][i]])
        //         }
        //         // console.log(lines[ii][i]);
        //     }

            
        // }

        // const lines2 = (Array.from(horozontalLines.values())).map(item => item.join(''))

        // const allLines = [...lines, ...lines2];
        
        // allLines.forEach(line => {

        //     console.log(line);

        //     for(let i = 0; i < line.length -3; i++){
        //         const section = line.slice(i, 4);

        //         if(section === 'XMAS' || section === 'SAMX')
        //     }
        // })

        // console.log(horozontalLines.get(0).join(''));
        // let set = new Set();

        // lines.forEach(item => set.add(item.length));

        // console.log(set);
        

        

        
    }catch(error){
        console.log(error)
    }
}

// part1();

const part2 = async () => {

    try{
        const lines = inputText.split('\n').map(item => item.split(''))

        let answer = 0;
        for(let line = 1; line < 139; line++){

            for(let charNumber = 1; charNumber < 139; charNumber++){
                
                
                if(lines[line][charNumber] === 'A'){
                    const words = [];

                    words.push(lines[line - 1][charNumber - 1] + lines[line][charNumber] + lines[line + 1][charNumber + 1]);
                    words.push(lines[line - 1][charNumber + 1] + lines[line][charNumber] + lines[line + 1][charNumber - 1]);

                    const check = words.some(item => item !== 'MAS' && item !== 'SAM');

                    
                    if(!check){
                        answer++
                    }
                }
            }
        }

        console.log(answer);
    }catch(error){
        console.log(error)
    }
}

part2();