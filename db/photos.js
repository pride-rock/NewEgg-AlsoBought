const photos = [
"https://drive.google.com/file/d/19R0ZehETSzXClUbdQPL0hyHVOY_0t1KL", 
"https://drive.google.com/file/d/1YX2tChidJ3hjxGDgiFBKd0Tl8zKu0hXT", 
"https://drive.google.com/file/d/1HOfwFLXSfZMiTtXtqgMaJZ3G3mDDIwsE", 
"https://drive.google.com/file/d/162mKEecbRRwF6yYBmQ48z1_v2hpN4SYN", 
"https://drive.google.com/file/d/11FDoXwCzwNgulRWs5SZnibVMvu9imWCS", 
"https://drive.google.com/file/d/1U_oH8eJL3he1EnZ5jqD4CFGJB4Up0FHk", 
"https://drive.google.com/file/d/1YHy0mCR4rFpR9jClbvHX9mjHuota9qL1", 
"https://drive.google.com/file/d/1K0WP-mx4kI8XFvd8rUPyT09tHJxfqUFN", 
"https://drive.google.com/file/d/1UQubN9kdwymDICC6RmA8sqZcXeKoJZ0Z", 
"https://drive.google.com/file/d/1bvzqkUAvAXEi4OnoUvM-z5UmClL5az5K", 
"https://drive.google.com/file/d/16xo19SAbfrGopEtzxGyPexh1nJcUI9Nr", 
"https://drive.google.com/file/d/1WqxLPSvdzsLrJ0qGgxZ8g7i8q-8wm3JC", 
"https://drive.google.com/file/d/1izCMcbF0DEPlGniY_KVpjYI2zJtmbbRj", 
"https://drive.google.com/file/d/1s5YPpBToT9VwklApusNSZEtGHCTC78Ao", 
"https://drive.google.com/file/d/1JBjeXJN2KDe9IREltPIEul893Z2T1Xpk", 
"https://drive.google.com/file/d/1lfjOhadIzy0wfKa1dcZIY1Yt-aCpIAom", 
"https://drive.google.com/file/d/1O4F03JDsRTG-fE7QM7XQ-s2rfHzEo7Uf", 
"https://drive.google.com/file/d/13kcCGKI08xZKGp59LHX4XhHglBwBcUVD", 
"https://drive.google.com/file/d/1Mug2XmBFH9ekZESs54ZmGFh8py3xrTJ0", 
"https://drive.google.com/file/d/174kyRNpOk_ky2VEefMa8kn1a9nyY7NzM", 
"https://drive.google.com/file/d/1OIL_hOtSyeev7QdgPKJqJuBJL9TDCobx", 
"https://drive.google.com/file/d/1a3NEOifJix5WQg1r5unMGNty29ILXu0T", 
"https://drive.google.com/file/d/18d8lwZ8TuwxayfK-C1l9aXIsYNmGjfZp", 
"https://drive.google.com/file/d/1Wrs45B5-cAg9O4Tk6UjyR1Bu4bZuu-0t", 
"https://drive.google.com/file/d/1bSjSrlMBoN5Yh0Wph9kBSk1-72bpQXMy", 
"https://drive.google.com/file/d/1xdAwx4EaUXIhOeGlvU5k09VGief_x3eo", 
"https://drive.google.com/file/d/15pW2iyFIebc2s1v39Td2TBRlky7heb6O", 
"https://drive.google.com/file/d/1NSztGo9xFpk7C0C9N8_sD15H3s4sxfNA", 
"https://drive.google.com/file/d/126gfS8sdSaZ-rduEF2knYxJnIJ0ub49W", 
"https://drive.google.com/file/d/1Qfw_odNTGEor3JbkwzVX5Nt5c9z5_hpd", 
"https://drive.google.com/file/d/1j4T5RpRCgBszbKuggenmr8gBHFx7eDzn", 
"https://drive.google.com/file/d/1qaTIoyChup0EKIY1jGuI09CncjoidZCe", 
"https://drive.google.com/file/d/1Yblkvv9rGIbp0arRdoy81E0nu0dUEv7y", 
"https://drive.google.com/file/d/1ufTBb2ySWZPSsF-D25yM1Gk8uESqCbJN", 
"https://drive.google.com/file/d/1mdgfBz65182SRJFWMYBQZ66agP2osTIV", 
"https://drive.google.com/file/d/1kNQkWOFLYZrT5X2JPm4xLizK0yfBBn5X", 
"https://drive.google.com/file/d/1jGcQUAEccSaT6om2L2B7dxX7Pdf7YQAz", 
"https://drive.google.com/file/d/1IjJjml7lx1uVd_8PARkfhPsZlK8EeClx", 
"https://drive.google.com/file/d/1bc8OoLg4fV2MSjMCo30L75T-wBbcNj6G", 
"https://drive.google.com/file/d/17D9IgZXvhoc1yYbKoWJn4sFrVM6tJjpL", 
"https://drive.google.com/file/d/1XrTKqXjDKKdiHIvM8FBXK53LudwJeYMi", 
"https://drive.google.com/file/d/1CYi6mJY0lHHRkDeZKTeEf7PuihCK0kem", 
"https://drive.google.com/file/d/1wfeC4i37Ld8I_o_flh6mrmmQoN8pCWNJ", 
"https://drive.google.com/file/d/1I4yT4krZkDjMta_LPt0Mnrnko9tbwnK4", 
"https://drive.google.com/file/d/14qU_hqaLHtlVptRmvVwhsW-nLlbShLhT", 
"https://drive.google.com/file/d/1rZeEf-e6Tw3tZHlQCAC_EXYCeWGrKs4e", 
"https://drive.google.com/file/d/1iZ7--dGD7IQHnuqAznQU3EDDlNpBMtn2", 
"https://drive.google.com/file/d/18T7RU1rcvb-Q91Z9LqcC_0xOHDbbce0j", 
"https://drive.google.com/file/d/1SnTepUV-ImwBe0s_lKtJ-xQbfdtznvXX", 
"https://drive.google.com/file/d/13kV76pJ7SGrRWFF38rMW3WzFLr_1mGvU", 
"https://drive.google.com/file/d/1h-QvRi5DdlWvdz2m4pCYxVEfWUQ6RW-W", 
"https://drive.google.com/file/d/1Cg9oBbpB9JAiS60j4474w6FjcalI4gBi", 
"https://drive.google.com/file/d/10ZanCltcFauCTmXDxYDmyRIesWKXk62a", 
"https://drive.google.com/file/d/1IEztoB7CgzNQ4llgObQjGRH20enNRi1a", 
"https://drive.google.com/file/d/1Kv60x1YRnePTfblRBo0dwjbINMu3Rt9a", 
"https://drive.google.com/file/d/1DxrrPO-JClrVQImBxkBQqpKiYGzNnAkK", 
"https://drive.google.com/file/d/1VrUPedT5Y7NL2i90Zef3o6CodYWxPsjI", 
"https://drive.google.com/file/d/1XPnS4GtkvFxnK77kx-PwrERBGOckDsrj", 
"https://drive.google.com/file/d/1ZKfwZV7cKkqcAA4HX0PjQc9_f1HA6Aii", 
"https://drive.google.com/file/d/1kZNCb_yU1rLE9KL_2-r87ZHt9zlJAYfa", 
"https://drive.google.com/file/d/1VYf1wSZNLr5OgGGRqEsw0fBcNMBOqjLC", 
"https://drive.google.com/file/d/1IxLmxnVK1O3U2MOFA18NFiNqn9TA9urm", 
"https://drive.google.com/file/d/1O-rWd9xXDC2jtUzp7Q2sEU-Llfq1K_os", 
"https://drive.google.com/file/d/19uzjMedTKHh85rbd38mVf13mlL6ax934", 
"https://drive.google.com/file/d/1b2qaHOz814A9o8aaTlxlljhMVTCrIkZ8", 
"https://drive.google.com/file/d/15f8UZV1ekhOwxFS-PdK0t81iO2d_0CU5", 
"https://drive.google.com/file/d/1zWC69x8JEnTpPEJSEUojOjYezZljOqm1", 
"https://drive.google.com/file/d/1aVjBGy_qVYhw-iaPRf3KZDfjQskI8VsG", 
"https://drive.google.com/file/d/15XMUwoVo-Q7-LcV1VHdXYePrUWP4Jui1", 
"https://drive.google.com/file/d/1pBldwsv6Pgx958xmqMOffoj90N_ErGk3", 
"https://drive.google.com/file/d/1znDXwK853CXCstnegq__O3zse2zb2kNo", 
"https://drive.google.com/file/d/1BJoQwvLoq5tR0E4tG7ZeYM4IPcRjWjJu", 
"https://drive.google.com/file/d/1EzfEy0X5pNJOkwZBPZJIAzV2i45tsNpn", 
"https://drive.google.com/file/d/1VHJyyI9MIw4YNheqTbBHsNtoS7UBZ4w5", 
"https://drive.google.com/file/d/1mi2csJXNrJggaDVF9L3LaXJns5dVswh5", 
"https://drive.google.com/file/d/1V8YfsIZQRcfHZ1reITwrALmfKMhaZS_v", 
"https://drive.google.com/file/d/1lUeYlq9hKIScmuhzRXXDGJ95XllGD1Ux", 
"https://drive.google.com/file/d/1pCgId55AccQCuPKAdJ-GIP14wkxBcqhl", 
"https://drive.google.com/file/d/1aFwqiNZlYdBaM2BfsvLKg46UgVUXM1eb", 
"https://drive.google.com/file/d/1Ml95-j9gP1Tx5W-mKP0ntgRx9pMMNA-T", 
"https://drive.google.com/file/d/1UsVAFV3wlZ0QlcuMSs6tzBROfDtH455O", 
"https://drive.google.com/file/d/1cJ-0f2PIk4Gtjuz-h-fXl3J54IDF10Rk", 
"https://drive.google.com/file/d/1srzNR_BNZ717EArU2BQYc5Fud6yfNqXj", 
"https://drive.google.com/file/d/1rR8J10BG5THIRKTScQEqiSIGxOW2L02u", 
"https://drive.google.com/file/d/19VVzhBUje8SH2Lv30sSmhiWc8hSf6zxg", 
"https://drive.google.com/file/d/1Md_RLZbnKwx9_xBazQK6JyIKioxKUwIG", 
"https://drive.google.com/file/d/1-CI_tVsepEOtzQJoXGplRYw2EJx6tVEw", 
"https://drive.google.com/file/d/1Wv_6y97ist7rwKolkUu79r_Hnk5KWDVt", 
"https://drive.google.com/file/d/1Odruo9nHn2aASSfCJMhwRIoFTrzQK8YP", 
"https://drive.google.com/file/d/16m7UvdGIxLXW-JjiXlR8jKg74dfd51O3", 
"https://drive.google.com/file/d/1lJkXymZPAgw6XNdbv2NSDLmz9PsRygEh", 
"https://drive.google.com/file/d/1EgDaJJHDgheAgsYusxSLxF642DwQFbvJ", 
"https://drive.google.com/file/d/1mf3I8EGgs52vkgCV037GuDeHDb1-4m9E", 
"https://drive.google.com/file/d/1CoKoSuzIjaPLr8knxRPqtOZh_9dmS56F", 
"https://drive.google.com/file/d/1KeuDIBqVUFCpHJPGlh4Neq46sNRDWYLF", 
"https://drive.google.com/file/d/1twGOAYNxPo49FGU_Q2YOYG6T7mYEIEIF", 
"https://drive.google.com/file/d/1BoYDwYxVkwsd5ePF7hzGOtnPuNboQHTS", 
"https://drive.google.com/file/d/13d8g5D1lIV-COSIKduUHEHp9dZutal30", 
"https://drive.google.com/file/d/1KeQTsk1_oDt6Ma0OUFq9S0D6Ezibp9MS", 
"https://drive.google.com/file/d/1xPQumj38c9MAymjataMYVK5fPAaNqkZA", 
]

// console.log(photos)
module.exports = photos
  
  
  