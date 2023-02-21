package com.fjebernas.drive.service.impl;

import com.fjebernas.drive.model.Proverb;
import com.fjebernas.drive.repository.ProverbRepository;
import com.fjebernas.drive.service.ProverbService;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Random;

@Service
public class ProverbServiceImpl implements ProverbService {

  private final ProverbRepository proverbRepository;

  public ProverbServiceImpl(ProverbRepository proverbRepository) {
    this.proverbRepository = proverbRepository;
  }

  @Override
  public List<Proverb> getAll() {
    return proverbRepository.findAll();
  }

  @Override
  public Proverb getById(Long id) {
    return proverbRepository.findById(id).orElseThrow();
  }

  @Override
  public Proverb store(Proverb proverb) throws Exception {
//    if (proverbRepository.existsProverbByContent(proverb.getContent())) {
//      throw new Exception("Proverb with content: \"" + proverb.getContent() + "\" already exists.");
//    } else {
//      return proverbRepository.save(proverb);
//    }

    return proverbRepository.save(proverb);
  }

  @Override
  public void destroy(Long id) {
    proverbRepository.deleteById(id);
  }

  @Override
  public HashSet<String> getAllCountries() {
    List<Proverb> proverbs = proverbRepository.findAll();
    HashSet<String> countries = new HashSet<>();
    proverbs.forEach(proverb -> countries.add(proverb.getCountry()));
    return countries;
  }

  @Override
  public Proverb getRandomProverb() {
    List<Proverb> proverbs = proverbRepository.findAll();
    return proverbs.size() > 0 ? proverbs.get(new Random().nextInt(proverbs.size()))
          : new Proverb();
  }
}
