const shadowLands = [
"https://drive.google.com/file/d/132UvL5IGOE10VP7mFRXp0u16w645w5Hg", 
"https://drive.google.com/file/d/1lYsAiWnq2fFY5716RGl5xVi4S1tvULEK", 
"https://drive.google.com/file/d/14ZJkV3MPvUY-ERCAgFQ3gO8HFpWG0gSE", 
"https://drive.google.com/file/d/1kJAyhHwrdZIq98-u_BTQ4OLNKjn3_Am9", 
"https://drive.google.com/file/d/1N6iAu--nf7W7KffPWl1prpQ62-D4YNDn", 
"https://drive.google.com/file/d/1d1SwzuhZMaBM9T4XXYffHlMqMCARXcdf", 
"https://drive.google.com/file/d/1WGbaHxi9tVE39wkfwFB6Pd9BzIM8doeq", 
"https://drive.google.com/file/d/1bGjtnLpBaI5FixN8liv6GOfuvfrW82CO", 
"https://drive.google.com/file/d/17kq8bRBCetGcZYKEfd4E6I4Dv2N5I07J", 
"https://drive.google.com/file/d/1OmX_W2VjrPsgp43yHGTXocgC_d_SBTLX", 
"https://drive.google.com/file/d/1X-mAFPeAuhSwTSzTBlCQPPU_bXW-PdvJ", 
"https://drive.google.com/file/d/1sKyDktMqVdp55UcSX4uKBYHj597wSvlz", 
"https://drive.google.com/file/d/1v8_Gka_A9sDwPAmZVJF1hJXTyZDGRKoQ", 
"https://drive.google.com/file/d/1Nr55JsKE4KW_tppHXnZI3g2_Jxho_Irb", 
"https://drive.google.com/file/d/1z_23GEpFmb7R9Z_keeQoLJSSCaxoWP7t", 
"https://drive.google.com/file/d/1hC1oOZ-mTAreDMaQa6cP6jvgviNMKD-j", 
"https://drive.google.com/file/d/18PaJW2Q7u2HuteunS42O6eCopGDZRH7J", 
"https://drive.google.com/file/d/1BhjFIUZ5RepioxzJLjyF2p766AnvqPOT", 
"https://drive.google.com/file/d/1cW1d8iKAT6wQF4OfHPbOXdvu0pfZpSfo", 
"https://drive.google.com/file/d/1PAQTX03BL9q1Iq9y7OukiIOZDuJiICug", 
"https://drive.google.com/file/d/1-gqWR_VRSP-2S2PBBmc6Z8wZNKCX3P_w", 
"https://drive.google.com/file/d/1uCHd4OkKQuLXpwWnO0KrlL2QF5FwOUMH", 
"https://drive.google.com/file/d/1Uh_pZbjcM-ll4itlXqHOIzODnANv53bH", 
"https://drive.google.com/file/d/1Nk2gSoYMmpvxzY9zoHcSjHL3fYpeP2wF", 
"https://drive.google.com/file/d/142L4lmwF2toSyeuoQFT2zSXrZRFSUNbl", 
"https://drive.google.com/file/d/1qW0w631_AUxaCEa_6ghUdsig_TEkRdS-", 
"https://drive.google.com/file/d/1HojfCKs-Iudk3UDX4y8WDYihVLQUWngS", 
"https://drive.google.com/file/d/1rj1YhlW6_ETZdj2nq3gsmuSvZTzSXiro", 
"https://drive.google.com/file/d/1EuifyM7bmTfWt2sWaA4mtOU8aiVf9UOB", 
"https://drive.google.com/file/d/1VAKvg-fmLksrwc0I6_YkAj4a7Zha7bx8", 
"https://drive.google.com/file/d/1-3I90Xrr2rLuK_kpUQGZBPZJnjDjgqOn", 
"https://drive.google.com/file/d/1xVkDrpE7thqlNEdjMNhavW3vwwE-3j-6", 
"https://drive.google.com/file/d/1Q6dMZaQ4hHFdkxE1SwZf8j2VJqtbLbuF", 
"https://drive.google.com/file/d/12pSPvpUtr0halxYTiFXvizw_0KDPDlsW", 
"https://drive.google.com/file/d/1NYKRUjqrmIKJdFpqf_71OCoI7wJjKnOp", 
"https://drive.google.com/file/d/1FkQEEl9PaZbGYTQH9lnUg1qU-N3bskvY", 
"https://drive.google.com/file/d/1-IDChkuK0L0eDR3R7sK7cK3CWMlh7KZ5", 
"https://drive.google.com/file/d/1nKNmB-DzY7KPDeK8Tc7kWEAG7hkwSsTD", 
"https://drive.google.com/file/d/10OEHydebBoCtSoPzg0K0AT1frPditiv7", 
"https://drive.google.com/file/d/1PSHJZNWxL1ucTl90ko0cyrPZ4LNSBgHi", 
"https://drive.google.com/file/d/1Ba9orQs05xINidu7niehdtu_Td2Fo3rS", 
"https://drive.google.com/file/d/1oo8wfY246Q4S7kWFhY7cdS67Zf8nx9wP", 
"https://drive.google.com/file/d/1tVSvZycAv4wLKn-jShZxkHfxhy8xwKww", 
"https://drive.google.com/file/d/1tlVvHgnNT0GxK3bAROeRlL-3aaw90Bi1", 
"https://drive.google.com/file/d/1dDoOMMjvxP-6vhJ1b-iJ4wNsJ0RbpBsy", 
"https://drive.google.com/file/d/1IB5TKfD5k4iMF1LcdRiRWN0m9z20XwR6", 
"https://drive.google.com/file/d/1QUnYYD_oZoP5M7-SYCNqmCAJ3gPeuR_2", 
"https://drive.google.com/file/d/1kahOu848D5hzpwCKvzpdRKmsVZt4rJvg", 
"https://drive.google.com/file/d/13LaQ5uBxYtf-xH5N6xlPw1DQyqf5SSPi", 
"https://drive.google.com/file/d/1nZgrq25GRvL4pP-oUehnW1GTpdmwt4o6", 
"https://drive.google.com/file/d/1Claz78lJS6Drx9rGFt4oR7VRyk8ofpxV", 
"https://drive.google.com/file/d/1NGqjR-SxBrzXyR2CW5p9Bkl_vj5jSPY4", 
"https://drive.google.com/file/d/1qsNcc04SaZA7ZzxBr1SO-6BRU0pBFBmp", 
"https://drive.google.com/file/d/15ARoRHzvGbP1PhfFGyUy_3Ol9Xltlwsg", 
"https://drive.google.com/file/d/1-5dJYntTsqIa59RSfLu9NSGJ7yZZIyrX", 
"https://drive.google.com/file/d/16s-tJoAUN6HmP4uQA0QUDxXpOsg0PGCr", 
"https://drive.google.com/file/d/1YBWg5OPm0oWLKSbDV1iVRg3o4JbpajKl", 
"https://drive.google.com/file/d/1LQ9dYhJuC174VnFSf7QJ-Hi01doEgzS-", 
"https://drive.google.com/file/d/1lBfO7smpP7JSIVz81FjzkkbtEtirYYQu", 
"https://drive.google.com/file/d/1tMNkbkVw-gU_e-bTYAj1rGmGzN9HkOO2", 
"https://drive.google.com/file/d/1Ays-jTlVwdN0qwN6ZrklwTyIC1wwQY0J", 
"https://drive.google.com/file/d/19Lix1ACa0P6rKC5dDuLHb56FrqA2rlfh", 
"https://drive.google.com/file/d/1l9qHQ2EkMw_E7Oq8Q6C018P-WkMk5y6I", 
"https://drive.google.com/file/d/1dXXMLQ0QjhqFvvEdaoxoKKxRcRzFwIhy", 
"https://drive.google.com/file/d/1-rGFNJxBjesHdOGQpadgb5EFVhG66fvo", 
"https://drive.google.com/file/d/1rnorp7CzeUX_s-EBT2r1QVdfMBKk6aoL", 
"https://drive.google.com/file/d/1aQuaqVPD98Uwx-KXIbRJMI7LB6Ng1eKW", 
"https://drive.google.com/file/d/12Nsz-qZoGq0dD1iMVMeIR_NpfjDylzPn", 
"https://drive.google.com/file/d/1jizJqLIZ-zbPlRGZNVNvNrR_EHorP4h3", 
"https://drive.google.com/file/d/1zh35ZsVYB0Mp85gQEDTH8x4ObWMjiabE", 
"https://drive.google.com/file/d/1ke2ZK2Z8l6qtekxbQyHl4KKDwH44Y-LO", 
"https://drive.google.com/file/d/1Kdephn5QzeVNn-lMVv6mmqA9dZzYqr4e", 
"https://drive.google.com/file/d/1xFyM6pX11szzQNt_um4zBKYc8azj3Zdy", 
"https://drive.google.com/file/d/1hVRSTNwIh5U90LW36lPz0WBIHfWXMlpd", 
"https://drive.google.com/file/d/14X7Tf05RMPO_UMcVn6s_3rMOnZGtO1gV", 
"https://drive.google.com/file/d/1V_UIGtSUDKBIE42C0YLqjaUHkbrGoXtM", 
"https://drive.google.com/file/d/1Ryo6usKmKD8oqQnmsCP0j-ph4WebHQO_", 
"https://drive.google.com/file/d/1-zN2ceutKYARd7bBkOKR80QoUfjVb6wF", 
"https://drive.google.com/file/d/17AtDG7yFFEArcHHDRz9UWXuKBGgduclI", 
"https://drive.google.com/file/d/1BWBmTYevsK3EybKjsYg3i1JSZjA2gQcK", 
"https://drive.google.com/file/d/1Jg2Jj3fJTSmjAB6TWWa3wkinPZWQaBpV", 
"https://drive.google.com/file/d/104enjtzxbtkTuw28cX_bKSUlOIhQLJQ4", 
"https://drive.google.com/file/d/1CngzJpteLPVWUvJAEdMUg-3A_eRssGEI", 
"https://drive.google.com/file/d/1N-cfWfQ10wyjgBT7NUJFJ8pXnxco_aOv", 
"https://drive.google.com/file/d/1TxZLRzn7smw7vb8tCyo5FSiqIX1J8NHd", 
"https://drive.google.com/file/d/1t-6c-6N9A83dDyXc4cQKVOVxg27Es-Ok", 
"https://drive.google.com/file/d/1hxANGjiPRShUXF9Zf5OXMbSpJeCHB-U-", 
"https://drive.google.com/file/d/1rw4GjpuXBGB--PQFEAVmL63J9oQ4V8mY", 
"https://drive.google.com/file/d/1a5Tp3hlb6R5dXPly5gv_kKhEgPIQDvV8", 
"https://drive.google.com/file/d/1boR3FFjVOXeI_ZKSrR68ZPGSCLDvxd8u", 
"https://drive.google.com/file/d/1KVHpKBJPCFfVuWjfkeWGrE5NL3_5Wkgt", 
"https://drive.google.com/file/d/11u9EtULl80gjPuMkR-jQVa2Aag8NMzAy", 
"https://drive.google.com/file/d/19u0gSFKiPXbQnBk8qBLhjeVVQ-iZKc4G", 
"https://drive.google.com/file/d/1Wq-VVol2oVago4MJbsdcUn3as2OF0emG", 
"https://drive.google.com/file/d/1-joqZvACOirG_dW8R5n2aJmUVLGFz067", 
"https://drive.google.com/file/d/1ez4y9IJRPLlTAEDpX-zYgQfbQWbO6zLU", 
"https://drive.google.com/file/d/1OuW_h_pHkVrYAH13957TBXOQgwNVdQmi", 
"https://drive.google.com/file/d/1BJ0Cd4lBtiZDw6DvqIicTojqejTimAQX", 
"https://drive.google.com/file/d/1YsyFTmnoxmr9T6XNNIHmhxtlGRUWnkF5", 
"https://drive.google.com/file/d/11NIfXbuRHInQa73oPWhb9MI3eqHrXe0E"
]

module.exports = shadowLands