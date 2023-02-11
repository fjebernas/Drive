package com.fjebernas.drive.controller;

import com.fjebernas.drive.model.Proverb;
import com.fjebernas.drive.service.ProverbService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.concurrent.TimeUnit;

@CrossOrigin
@RequestMapping("${serverBaseUrl}/proverbs")
@RestController
public class ProverbController {

  private final ProverbService proverbService;

  public ProverbController(ProverbService proverbService) {
    this.proverbService = proverbService;
  }

  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/")
  List<Proverb> getAll() throws InterruptedException {
    TimeUnit.MILLISECONDS.sleep(1000);
    return proverbService.getAll();
  }

  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/{id}")
  Proverb getById(@PathVariable Long id) {
    return proverbService.getById(id);
  }

  @ResponseStatus(HttpStatus.CREATED)
  @PostMapping("/")
  Proverb store(@Valid @RequestBody Proverb proverb) throws Exception {
    return proverbService.store(proverb);
  }

  @ResponseStatus(HttpStatus.NO_CONTENT)
  @DeleteMapping("/{id}")
  void destroy(@PathVariable Long id) {
    proverbService.destroy(id);
  }

  @ResponseStatus(HttpStatus.OK)
  @PutMapping("/{id}")
  Proverb update(@PathVariable Long id, @RequestBody Proverb updatedProverb) throws Exception {
    Proverb existingProverb = proverbService.getById(id);
    existingProverb.setContent(updatedProverb.getContent());
    existingProverb.setCountry(updatedProverb.getCountry());
    return proverbService.store(existingProverb);
  }

  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/countries")
  HashSet<String> getAllCountries() {
    return proverbService.getAllCountries();
  }

  @ResponseStatus(HttpStatus.OK)
  @GetMapping("/random")
  Proverb getRandomProverb() throws InterruptedException {
    TimeUnit.MILLISECONDS.sleep(500);
    return proverbService.getRandomProverb();
  }
}
